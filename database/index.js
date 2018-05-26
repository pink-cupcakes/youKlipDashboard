const mysql = require('mysql');
const config = require('./config.js');

var dbPool = mysql.createPool({
  host           : config.RDS_HOSTNAME,
  user           : config.RDS_USERNAME,
  password       : config.RDS_PASSWORD,
  port           : config.RDS_PORT,
  database       : 'skillshot'
});

dbPool.getConnection(function(err, connection) {
    if (err) { console.error(err); }
  })
  
  module.exports = dbPool;