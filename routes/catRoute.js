"use strict";
const express = require("express");
const router = express.Router();
const catController = require("../controllers/catController");
var multer = require("multer");
var upload = multer({ dest: "./uploads/" });

router.get("/", catController.cat_list_get);

router.get("/:catid", catController.cat_get);

router.post("/", upload.single("cat"), catController.cat_upload);

module.exports = router;
