module.exports.noticias = (application, res) => {
  const connection = application.config.dbConnection(); // foi mapeado la no server
  const NoticiasDAO = new application.app.models.NoticiasDAO(connection);

  NoticiasDAO.getNoticias(function (error, results) {
    if (error) throw error;
    res.render("noticias/noticias", {
      noticias: results
    })
    //res.json(json)
  });

}

module.exports.noticia = (application, req, res) => {
  const connection = application.config.dbConnection(); // foi mapeado la no server
  const NoticiasDAO = new application.app.models.NoticiasDAO(connection);

  let id = req.query.id;

  NoticiasDAO.getNoticia(id, function (error, results) {
    if (error) console.log(error);    
    res.render("noticias/noticia", {noticia: results})
    //res.json(json)
  });

}