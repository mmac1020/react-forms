const router = require('express').Router();

router.use('/users', require('./user-api'));

module.exports = router;
