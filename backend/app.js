const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
const helmet = require('helmet');
const { errors } = require('celebrate');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const NotFoundError = require('./errors/not-found-err');
const DEVBASE = require('./constants/database');
const router = require('./routes/index');
const rateLimiter = require('./middlewares/rateLimiter');

const app = express();

const { PORT = 3000, DATABASE = DEVBASE } = process.env;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(errors());
app.use(errorHandler);
app.use(errorLogger);
app.use(helmet());
app.use(rateLimiter);
app.use(router);
app.use(auth);

mongoose.connect(DATABASE, {});
app.use(() => {
  throw new NotFoundError('Запрашиваемый URL не найден :(');
});

app.listen(PORT);
