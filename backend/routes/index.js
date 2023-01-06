const router = require('express').Router();
const auth = require('../middlewares/auth');

router.use('/signin', require('./signin'));
router.use('/signup', require('./signup'));
router.use('/movies', auth, require('./movies'));
router.use('/users', auth, require('./users'));

module.exports = router;