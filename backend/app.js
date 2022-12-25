const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
<<<<<<< Updated upstream
const { celebrate, Joi, errors } = require('celebrate');
const cors = require('cors');
const { createUser, loginUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const NotFoundError = require('./errors/not-found-err');

const app = express();
const { PORT = 3000 } = process.env;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

const allowedCors = [
  'https://kmariasha.nomoredomains.sbs',
  'http://kmariasha.nomoredomains.sbs',
  'localhost:3000',
];

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), loginUser);

app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), createUser);

app.use(auth);

app.use('/movies', require('./routes/movies'));
app.use('/users', require('./routes/users'));

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb', {
});
=======
const cors = require('cors');
const { errors } = require('celebrate');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const NotFoundError = require('./errors/not-found-err');
const DEVBASE = require('./constants/database');

const app = express();

const { PORT = 3000, DATABASE = DEVBASE } = process.env;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(errors());
app.use(errorLogger);

app.use('/signin', require('./routes/signin'));
app.use('/signup', require('./routes/signup'));
app.use('/movies', require('./routes/movies'));
app.use('/users', require('./routes/users'));

app.use(auth);

mongoose.connect(DATABASE, {});
>>>>>>> Stashed changes

app.use(() => {
  throw new NotFoundError('Такого роута не существует');
});

<<<<<<< Updated upstream
app.use(errorLogger);
app.use(errors());

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const message = statusCode === 500 ? 'На сервере произошла ошибка' : err.message;

  res.status(err.statusCode).send({ message });

=======
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 ? 'На сервере произошла ошибка' : err.message;
  res.status(err.statusCode).send({ message });
>>>>>>> Stashed changes
  next();
});

app.listen(PORT);
