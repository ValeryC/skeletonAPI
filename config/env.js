const mysql = require('mysql2');

// create the connection to database
const config = {
  host: process.env.LOCAL_HOST,
  user: process.env.ROOT,
  password: process.env.PASS,
  database: process.env.DATA_BASE,
  // port: process.env.PORT
};

module.exports = config;