const router = require('express').Router();
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/not-found-err');

router.use('/signin', require('./signin'));
router.use('/signup', require('./signup'));
router.use('/movies', auth, require('./movies'));
router.use('/users', auth, require('./users'));

router.use('*', () => {
  throw new NotFoundError('Запрашиваемый URL не найден :(');
});

module.exports = router;
