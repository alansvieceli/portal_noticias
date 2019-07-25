module.exports = function (){
    
  this.getNoticias = function(connection, callback) {
      connection.query("select * from noticias", callback)
  }

  this.getNoticia = function(id, connection, callback) {
    connection.query(`select * from noticias where id = ${id}`, callback)
  }

  this.salvarNoticia = (noticia, connection, callback) => { //arrow function
    //mysql suporta passar um json como param, ele monta o resto tudo
    //o json tem q ter os mesmos nomes dos campos da tabela, óbvio
    connection.query('insert into noticias set ?', noticia, callback);
  }
  
  return this;  
}