const {
  check,
  validationResult
} = require('express-validator/check');

module.exports = function (application) {
  application.get("/formulario_inclusao_noticia", function (req, res) {
    res.render("admin/form_add_noticia")
  });

  application.post("/noticias/salvar",
    check('titulo')
    .isLength({min:1})
    .withMessage('Título não pode ser vazio'),
    check('resumo')
    .isLength({min: 10, max: 100})
    .withMessage('Resumo deve ter entre 10 e 100 caracteres'),
    function (req, res) {

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        //return res.status(422).json({errors: errors.array()})
        console.log(errors.array());
        res.render("admin/form_add_noticia", {validacao: errors.array()});
        return;
      }

      let noticia = req.body;
      let connection = application.config.dbConnection(); // foi mapeado la no server
      let NoticiasDAO = new application.app.models.NoticiasDAO(connection);

      NoticiasDAO.salvarNoticia(noticia, function (error, results) {
        if (error) console.log(error);
        res.redirect('/noticias')
      });
    });
}