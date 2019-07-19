module.exports = function (app){

  app.get("/noticias", function(req, res) {  
    var mysql = require("mysql");
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: "456852",
      database: "portal_noticias"
    });

    connection.query("select * from noticias", function(error, results){      
      if (error) 
        throw error;
      let string=JSON.stringify(results);
      let json =  JSON.parse(string);
      res.render("noticias/noticias", {noticias: results})
      //res.json(json)
    });
  });
}