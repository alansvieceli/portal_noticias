module.exports = function (application) {

  application.get("/noticias", function (req, res) {

    var connection = application.config.dbConnection(); // foi mapeado la no server
    var noticiasModel = application.app.models.noticiasModel

    noticiasModel.getNoticias(connection, function (error, results) {
      if (error) throw error;
      let string = JSON.stringify(results);
      let json = JSON.parse(string);
      res.render("noticias/noticias", {noticias: results})
      //res.json(json)
    });

  });
}