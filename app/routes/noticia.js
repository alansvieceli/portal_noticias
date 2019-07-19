module.exports = function (app){
  
  app.get("/noticia", function(req, res) {      
    var connection = app.config.dbConnection(); // foi mapeado la no server
    connection.query("select * from noticias where id = 1", function(error, results){      
      if (error) 
        throw error;
      let string=JSON.stringify(results);
      let json =  JSON.parse(string);
      res.render("noticias/noticia", {noticia: results})
      //res.json(json)
    });
  });
}