"use strict";
const userModel = require("../models/userModel");

const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  var userit = users.filter((user) => user.id == req.params.userid);
  res.json(userit);
};

const user_post = (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
};

module.exports = {
  user_list_get,
  user_get,
  user_post,
};
