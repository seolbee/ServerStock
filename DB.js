const mysql = require('mysql2');
const {c} = require('./credential');

const pool = mysql.createPool(c);
const promisePool = pool.promise();

module.exports = {
    pool : promisePool
}