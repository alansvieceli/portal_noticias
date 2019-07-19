module.exports = function (application){
  
  application.get("/noticia", function(req, res) {      
    
    const connection = application.config.dbConnection(); // foi mapeado la no server
    const noticiasModel = application.app.models.noticiasModel

    noticiasModel.getNoticia(1, connection, function (error, results) {
      if (error) 
        throw error;
      let string=JSON.stringify(results);
      let json =  JSON.parse(string);
      res.render("noticias/noticia", {noticia: results})
      //res.json(json)
    });
  });
}