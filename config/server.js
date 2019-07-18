var express = require("express");
var app = express();

app.set("view engine", 'ejs');
app.set("views", "./app/views"); //a partir de onde o modulo é chamado

module.exports = app;