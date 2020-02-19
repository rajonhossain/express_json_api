var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'reactdb',
  multipleStatements: true
});

// connection.connect();


module.exports = connection;