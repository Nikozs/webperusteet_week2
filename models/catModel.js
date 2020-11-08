'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_cat');
    console.log('rows', rows);
    return rows;
  } catch (e) {
    console.log('catModel error', e.message);
    return {error: 'DB Error'};
  }
};

const getCat = async (id) => {
  try {
    const [rows] = await promisePool.execute('SELECT * FROM wop_cat WHERE cat_id = ?',
        [id]);
    console.log('rows', rows);
    return rows;
  } catch (e) {
    console.log('catModel error', e.message);
    return {error: 'DB Error'};
  }
}

const addCat = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'INSERT INTO wop_cat (name, age, weight, owner, filename) VALUES (?,?,?,?,?)',
        params
    );
    console.log('rows', rows);
    return rows;
  } catch (e) {
    console.log('catModel error', e.message);
    return {error: 'DB Error'};
  }
}

const updateCat = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'UPDATE wop_cat SET name = ?, age = ?, weight = ?, owner = ? WHERE cat_id = ?',
        params
    );
    console.log('rows', rows);
    return rows;
  } catch (e) {
    console.log('catModel error', e.message);
    return {error: 'DB Error'};
  }
}

const deleteCat = async (id) => {
  try {
    const [rows] = await promisePool.execute('DELETE FROM wop_cat WHERE cat_id = ?',
        [id]);
    console.log('rows', rows);
    return rows;
  } catch (e) {
    console.log('catModel error', e.message);
    return {error: 'DB Error'};
  }
}

module.exports = {
  getAllCats,
  getCat,
  addCat,
  updateCat,
  deleteCat,
};



/*"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM wop_cat");
    return rows;
  } catch (e) {
    console.log("error", e.message);
    return [];
  }
};

const getACat = async (catid) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM wop_cat WHERE cat_id=?",
      catid
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

const addCat = async (cat, filu) => {
  try {
    var catname = cat.name;
    var catage = cat.age;
    var catweight = cat.weight;
    var catowner = cat.owner;
    var catfilename = filu.destination + filu.filename;
    const catti = await promisePool.query(
      "INSERT INTO wop_cat (name, age , weight, owner, filename) values (?, ?, ? ,?, ?);",
      [catname, catage, catweight, catowner, catfilename]
    );
  } catch (e) {
    console.log("error", e.message);
    return {};
  }
};

const updateCat = async (cat) => {
  try {
    var catname = cat.name;
    var catage = cat.age;
    var catweight = cat.weight;
    var catowner = cat.owner;
    var catid = cat.id;

    const catti = await promisePool.query(
      "UPDATE wop_cat SET name=?, age=? , weight=?, owner=? WHERE cat_id=?;",
      [catname, catage, catweight, catowner, catid]
    );
  } catch (e) {
    console.log("error", e.message);
    return {};
  }
};

const deleteCat = async (catid) => {
  try {
    const [
      rows,
    ] = await promisePool.execute("DELETE FROM wop_cat WHERE cat_id=?", [
      catid,
    ]);
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

module.exports = {
  getAllCats,
  getACat,
  addCat,
  updateCat,
  deleteCat,
};*/
