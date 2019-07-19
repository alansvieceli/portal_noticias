module.exports = function (app){
  
  app.get("/noticias", function(req, res) {      
    var connection = app.config.dbConnection(); // foi mapeado la no server
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