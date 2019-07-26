const { validationResult } = require('express-validator');

module.exports.formulario_inclusao_noticia = (res) => {
  res.render("admin/form_add_noticia", {
    noticia: {},
    validacao: {}
  })
}

module.exports.noticias_salvar = (application, req, res) => {
  let noticia = req.body;

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    //return res.status(422).json({errors: errors.array()})
    res.render("admin/form_add_noticia", {
      validacao: errors.array(),
      noticia: noticia
    });
    return;
  }

  let connection = application.config.dbConnection(); // foi mapeado la no server
  let NoticiasDAO = new application.app.models.NoticiasDAO(connection);

  NoticiasDAO.salvarNoticia(noticia, function (error, results) {
    if (error) console.log(error);
    res.redirect('/noticias')
  });

}