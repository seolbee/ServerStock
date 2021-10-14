// const mongoose = require('mongoose');
// const url = "mongodb+srv://user01:1234@cluster0.cl2sh.mongodb.net/stock?retryWrites=true&w=majority";
// mongoose.connect(url);
// const db = mongoose.connection;
// db.once('open', function(){
//     console.log("Connected to mongod server");
// });

// module.exports = {
//     db
// }

const mysql = require('mysql2');
const {c} = require('./credential');

const pool = mysql.createPool(c);
const promisePool = pool.promise();

module.exports = {
    pool : promisePool
}