'use strict';
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
const multer = require('multer');
const {body} = require('express-validator');

const fileFilter = (req, file, cb) => {
  if (file.mimetype.includes('image')) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({dest: './uploads/', fileFilter});

const injectFile = (req, res, next) => {
  if (req.file) {
    req.body.mimetype = req.file.mimetype;
  }
  next();
};

router.get('/', catController.cat_list_get);

router.get('/:catid', catController.cat_get);

router.post('/', upload.single('cat'), injectFile, [
  body('name', 'required field').isLength({min: 1}),
  body('age', 'shoudld be a number').isLength({min: 1}).isNumeric(),
  body('weight', 'shoudld be a number').isLength({min: 1}).isNumeric(),
  body('owner', 'shoudld be a id number of user').isLength({min: 1}).isNumeric(),
  body('mimetype', 'has to be image file').contains('image'),
], catController.cat_create_post);

router.put('/', [
  body('name', 'required field').isLength({min: 1}),
  body('age', 'shoudld be a number').isLength({min: 1}).isNumeric(),
  body('weight', 'shoudld be a number').isLength({min: 1}).isNumeric(),
  body('owner', 'shoudld be a id number of user').isLength({min: 1}).isNumeric(),
], catController.cat_update_put);

router.delete('/:id', catController.cat_delete);

module.exports = router;