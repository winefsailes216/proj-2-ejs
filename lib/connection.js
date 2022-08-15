var mysql = require("mysql");
// SET CONNECTION TO DATABASE
const connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "1234",
   database: "testcrud",
});
module.exports = connection;
