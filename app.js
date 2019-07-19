const app = require("./config/server")

 //var rotaHome = require("./app/routes/home");
 //var rotaNoticias = require("./app/routes/noticias");
 //var rotaFormularioInclusaoNoticia = require("./app/routes/formulario_inclusao_noticia");
 //rotaHome(app);
 //rotaNoticias(app);
 //rotaFormularioInclusaoNoticia(app);

 //ou

 //require("./app/routes/home")(app);
 //require("./app/routes/noticias")(app);
 //require("./app/routes/formulario_inclusao_noticia")(app);

 //ou 
 
 //usar o consign (esta no config/server)


app.listen(3000, function(){
  console.log("Sevidor ON. Porta: 3000")
})