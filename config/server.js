const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const app = express();
app.set("view engine", 'ejs');
app.set("views", "./app/views"); //a partir de onde o modulo é chamado

//aplicando midlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .into(app);

module.exports = app;