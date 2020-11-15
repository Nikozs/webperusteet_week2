"use strict";
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const catti = require("./routes/catRoute");
const userit = require("./routes/userRoute");
const passport = require('./utils/pass.js');
const authRoute = require('./routes/authRoute');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('uploads'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded


app.use('/auth', authRoute);
app.use('/cat', passport.authenticate('jwt', {session: false}), catti);
app.use('/user', passport.authenticate('jwt', {session: false}), userit);

/*app.use("/cat", catti);
app.use("/user", userit);*/

app.use("/", express.static("week2_public_html"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
