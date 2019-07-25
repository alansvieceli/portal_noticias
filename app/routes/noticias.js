module.exports = function (application) {

  application.get("/noticias", function (req, res) {

    const connection = application.config.dbConnection(); // foi mapeado la no server
    const NoticiasDAO = new application.app.models.NoticiasDAO(connection);

    NoticiasDAO.getNoticias(function (error, results) {
      if (error) throw error;
      let string = JSON.stringify(results);
      let json = JSON.parse(string);
      res.render("noticias/noticias", {noticias: results})
      //res.json(json)
    });

  });
}