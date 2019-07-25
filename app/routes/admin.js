const {
  check
} = require('express-validator');


module.exports = function (application) {
  application.get("/formulario_inclusao_noticia", (req, res) => {
    application.app.controllers.admin.formulario_inclusao_noticia(res);
  });

  application.post("/noticias/salvar",
    [check('titulo')
      .isLength({min: 1})
      .withMessage('Título não pode ser vazio'),
     check('resumo')
      .isLength({min: 10, max: 100})
      .withMessage('Resumo deve ter entre 10 e 100 caracteres')
    ],
    function (req, res) {
      console.log(1);
      application.app.controllers.admin.noticias_salvar(application, req, res);
    });
}