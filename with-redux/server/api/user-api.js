const express = require('express');
const { User } = require('../db');
const router = express.Router();

// everything in here starts with /api/users

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    const createdUser = await User.create(req.body);
    res.json(createdUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
