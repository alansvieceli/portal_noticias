var express = require("express");
var consign = require("consign");


var app = express();
app.set("view engine", 'ejs');
app.set("views", "./app/views"); //a partir de onde o modulo é chamado

consign().include('app/routes').into(app);

module.exports = app;