//Configurar con express el servidor de la app
const express = require('express');
const app = express();

app.set('port',3000);
app.listen(3000);

//Llamar el componente de mysql
var mysql = require('mysql');

//Establecer parametros de conexion
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'rootroot',
    database:'mibasenueva'
});

//Nos conectamos con la base
connection.connect();

//Agregar un nuevo registro
connection.query('INSERT INTO cliente VALUES (1,"WILMER",5555222555,"CR 13H 29 09 SUR")',function(error,resultado){
    if(error) throw error;
    console.log(resultado)
})

//Consulta a la tabla
connection.query('SELECT * FROM cliente',function(error,filas){
    if(error) throw error;
    console.log(filas);
})





//Cerramos la conexion 
connection.end();