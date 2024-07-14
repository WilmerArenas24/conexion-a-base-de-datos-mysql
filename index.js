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
    database:'basenueva'
});

//Nos conectamos con la base
connection.connect();



//Agregar un nuevo registro
connection.query('INSERT INTO cliente (idCliente, nombre, genero, telefono, domiciolio) VALUES (1, "Wil", 1, 223322, "Direccion")',
                 function(error,resultado){
    if(error) throw error;
    console.log(resultado)
})



//Consulta a la tabla
connection.query('SELECT * FROM cliente',function(error,filas){
    if(error) throw error;
    console.log(filas);
});


//Realizar modificacion a registro
connection.query('UPDATE cliente SET genero = 0, telefono = 11122211 WHERE idCliente=1',function(error,resultado){
    if(error) throw error;
    console.log(resultado)
})


//Consulta a la tabla despues de modificar
connection.query('SELECT * FROM cliente',function(error,filas){
    if(error) throw error;
    console.log(filas);
});

/*
//Eliminar un registro
connection.query('DELETE FROM cliente WHERE idCliente = 1',function(error,resultado){
    if(error) throw error;
    console.log(resultado)
});


//Consulta a la tabla despues de eliminar
connection.query('SELECT * FROM cliente',function(error,filas){
    if(error) throw error;
    console.log(filas);
});
*/


//Cerramos la conexion 
connection.end();