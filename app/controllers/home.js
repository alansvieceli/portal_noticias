module.exports.index = (application, req, res) => {  
  const connection = application.config.dbConnection(); // foi mapeado la no server
  const NoticiasDAO = new application.app.models.NoticiasDAO(connection);

  NoticiasDAO.getUltimasNoticias(5, function (error, results) {
    if (error) console.log(error);  
    res.render("home/index", {noticias: results})
    //res.json(json)
  });
}