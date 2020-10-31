"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const catti = require("./routes/catRoute");
const userit = require("./routes/userRoute");

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/cat", catti);
app.use("/user", userit);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
