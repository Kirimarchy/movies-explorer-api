const router = require('express').Router();

router.use('/signin', require('./signin'));
router.use('/signup', require('./signup'));
router.use('/movies', require('./movies'));
router.use('/users', require('./users'));

module.exports = router;