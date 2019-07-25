module.exports = function (application) {
  application.get("/formulario_inclusao_noticia", function(req, res) {  
    res.render("admin/form_add_noticia")
  });

  application.post("/noticias/salvar", function(req, res) {  
    let noticia = req.body;    
    let connection = application.config.dbConnection(); // foi mapeado la no server
    let NoticiasDAO = new application.app.models.NoticiasDAO(connection);

    NoticiasDAO.salvarNoticia(noticia, function (error, results) {
      if (error) console.log(error);
      res.redirect('/noticias')
    });


  });
}