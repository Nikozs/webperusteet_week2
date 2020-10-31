"use strict";
const catModel = require("../models/catModel");

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_get = async (req, res) => {
  var katit = await catModel.getACat(req.params.catid);
  res.json(katit);
};

const cat_upload = async (req, res, next) => {
  console.log(req.file, req.body);
  var katti = await catModel.addCat(req.body, req.file);
};

const cat_update_put = async (req, res, next) => {
  console.log(req.file, req.body);
  var katti = await catModel.updateCat(req.body);
};

const cat_delete = async (req, res, next) => {
  var katit = await catModel.deleteCat(req.params.id);
  res.json(katit);
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_upload,
  cat_update_put,
  cat_delete,
};
