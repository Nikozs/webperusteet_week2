"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.user_list_get);

router.get("/:userid", userController.user_get);

router.post("/", userController.user_create_post);

module.exports = router;
