const mongoose = require('mongoose');
const validator = require('validator');

const MovieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },

  director: {
    type: String,
    required: true,
  },

  duration: {
    type: Number,
    required: true,
  },

  year: {
<<<<<<< Updated upstream
    type: Number,
=======
    type: String,
>>>>>>> Stashed changes
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  trailerLink: {
    type: String,
    required: true,
  },

  thumbnail: {
    type: String,
    required: true,
  },

  owner: {
<<<<<<< Updated upstream
    type: String,
=======
    type: mongoose.Types.ObjectId,
>>>>>>> Stashed changes
    ref: 'user',
    required: false,
  },

  movieId: {
<<<<<<< Updated upstream
    type: String,
    ref: 'user',
=======
    type: Number,
    required: true,
    unique: true,
>>>>>>> Stashed changes
  },

  nameRU: {
    type: String,
    required: true,
<<<<<<< Updated upstream
=======
    unique: true,
>>>>>>> Stashed changes
  },

  nameEN: {
    type: String,
    required: true,
<<<<<<< Updated upstream
=======
    unique: true,
>>>>>>> Stashed changes
  },

});

MovieSchema.path('image').validate((link) => validator.isURL(link), 'Некорректный URL');
MovieSchema.path('thumbnail').validate((link) => validator.isURL(link), 'Некорректный URL');
MovieSchema.path('trailerLink').validate((link) => validator.isURL(link), 'Укажите ссылку на фильм');

// eslint-disable-next-line new-cap
module.exports = new mongoose.model('movie', MovieSchema);
