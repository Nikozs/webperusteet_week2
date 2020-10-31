"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query(
      "SELECT user_id,name,email FROM wop_user"
    );
    return rows;
  } catch (e) {
    console.log("error", e.message);
    return [];
  }
};

const getAUser = async (user_id) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT user_id,NAME,email FROM wop_user WHERE user_id=?",
      user_id
    );
    if (rows.length > 0) {
      return rows[0];
    } else {
      return {};
    }
  } catch (e) {
    console.log("error", e.message);
    return {};
  }
};

const addUser = async (user) => {
  try {
    var name = user.name;
    var email = user.email;
    var password = user.passwd;
    const u = await promisePool.query(
      "INSERT INTO wop_user (name,email,password) values (?,?,?)",
      [name, email, password]
    );
    return u;
  } catch (e) {
    console.log("error", e.message);
    return {};
  }
};

module.exports = {
  getAllUsers,
  getAUser,
  addUser,
};
