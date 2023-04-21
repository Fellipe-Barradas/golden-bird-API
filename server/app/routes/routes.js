// usersRouter.js

const express = require('express');
const usersController = require('../controllers/UsersController');

const router = express.Router();

router.get('/foods', usersController.getFood);

router.get('/recepes', usersController.getRecepes)


module.exports = router;
