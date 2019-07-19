module.exports = function (){
    
  this.getNoticias = function(connection, callback) {
      connection.query("select * from noticias", callback)
  }

  this.getNoticia = function(id, connection, callback) {
    connection.query(`select * from noticias where id = ${id}`, callback)
  }
  
  return this;  
}