module.exports = function (app){

  app.get("/noticias", function(req, res) {  
    var mysql = require("mysql");
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: "456852",
      database: "portal_noticias"
    });

    console.log("OK1")
    connection.query("select * from noticias", function(error, results){      
      if (error) throw error;
      let string=JSON.stringify(results);
      let json =  JSON.parse(string);
      console.log('>> json: ', json);
      
      //res.render("noticias/noticias")
      res.json(json)
    });
    
  
    
  });
}