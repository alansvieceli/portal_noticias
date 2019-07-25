function NoticiasDAO(connection){
    this._connection = connection; //convesão: _ faz parte da class
}

NoticiasDAO.prototype.getNoticias = function(callback) {
  this._connection.query("select * from noticias", callback)
}

NoticiasDAO.prototype.getNoticia = function(id, callback) {
  this._connection.query(`select * from noticias where id = ${id}`, callback)
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) { //arrow function
  //mysql suporta passar um json como param, ele monta o resto tudo
  //o json tem q ter os mesmos nomes dos campos da tabela, óbvio
  this._connection.query('insert into noticias set ?', noticia, callback);
}

module.exports = function (){
  return NoticiasDAO;  
}