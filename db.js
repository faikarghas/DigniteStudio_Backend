var mysql = require('mysql')

require('dotenv').config();

var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASSWORD,
  database        : process.env.DB_NAME,
  port            : 3307
});


module.exports = pool;


