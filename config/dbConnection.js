var mysql = require("mysql");

module.exports = function (){
  return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: "456852",
      database: "portal_noticias"
    });
}