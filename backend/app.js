require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const { errors } = require('celebrate');
const errorHandler = require('./middlewares/errorHandler');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const DEVBASE = require('./constants/database');
const router = require('./routes/index');
const rateLimiter = require('./middlewares/rateLimiter');

const app = express();

const { PORT = 3000, DATABASE = DEVBASE } = process.env;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(helmet());
app.use(rateLimiter);
app.use(router);
app.use(auth);
mongoose.connect(DATABASE, {});

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
