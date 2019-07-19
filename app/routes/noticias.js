var dbConnection = require("../../config/dbConnection")

module.exports = function (app){

  var connection = dbConnection();

  app.get("/noticias", function(req, res) {      
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