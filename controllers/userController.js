"use strict";
const userModel = require("../models/userModel");

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_get = async (req, res) => {
  var useri = await userModel.getAUser(req.params.userid);
  res.json(useri);
};

const user_create_post = (req, res) => {
  userModel.addUser(req.body);
};

module.exports = {
  user_list_get,
  user_get,
  user_create_post,
};
