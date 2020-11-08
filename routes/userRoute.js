'use strict';
const express = require('express');
const bodyParser = require("body-parser");
const {body} = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/', [
  body('name', 'name should contain at least 3 letters').isLength({min: 3}).escape(),
  body('email', 'email address was not in the correct format').isEmail(),
  body('passwd',
      'minimum length 8 characters, at least one capital letter').matches(
      '(?=.*[A-Z]).{8,}'),
], userController.user_create_post);

module.exports = router;