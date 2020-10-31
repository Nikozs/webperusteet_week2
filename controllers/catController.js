"use strict";
const catModel = require("../models/catModel");

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  var katit = cats.filter((cat) => cat.id == req.params.catid);
  res.json(katit);
};

const cat_upload = (req, res, next) => {
  console.log(req.file, req.body);
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_upload,
};
