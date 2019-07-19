const mysql = require("mysql");

const connMySQL = function(){
  return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: "456852",
      database: "portal_noticias"
    });
}

module.exports = function (){
  return connMySQL;
}