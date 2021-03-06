// Paquete necesario para conectar a bases de datos MySQL.
var mysql = require('mysql');

// Parámetros de conexión a la base de datos.
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database : 'eshop'
});

// Funcion que nos permite comprobar la conexión a la base de datos.
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// Funcion que nos devolverá resultados de la base de datos.
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = conn;

/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;

    // Bucle que recore los resultados y pinta en consola.
    console.log(result);
    for(i=0; i<result.length; i++){
    	console.log("Result: " + result[i].name);
    }

  });
});
*/