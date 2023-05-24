var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'product1',
    user: 'root',
    password: 'm@tKhaumysql'
});

module.exports = connection;