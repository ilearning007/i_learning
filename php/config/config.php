<?php 


# Esta es la definicion de el nombre del host
define('HOST', 'localhost');
define('PASS', '');
define('USER', 'root');


$enlace = mysql_connect(HOST, USER, PASS);
/*if (!$enlace) {
    die('No pudo conectarse: ' . mysql_error());
}
*/

$sql = 'CREATE DATABASE ilearning';
/*if (mysql_query($sql, $enlace)) {
    echo "La base de datos ilearning se creó correctamente\n";
} else {
    echo 'Error al crear la base de datos: ' . mysql_error() . "\n";
}
*/
define('DB_NAME', 'ilearning');


$sql = 'CREATE TABLE `ilearning`.`usuarios` ( `id_usuario` INT NOT NULL AUTO_INCREMENT , `nombre_usuario` TEXT NOT NULL , `correo_usuario` TEXT NOT NULL , `contrasenia_usuario` TEXT NOT NULL , PRIMARY KEY (`id_usuario`)) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_spanish_ci;';
/*
if (mysql_query($sql, $enlace)) {
    echo "La tabla usuarios ilearning se creó correctamente\n";
} else {
    echo 'Error al crear la tabla usuarios: ' . mysql_error() . "\n";
}
*/
##  Codigo para crear tabla usuarios
/*

CREATE TABLE `ilearning`.`usuarios` ( `id_usuario` INT NOT NULL AUTO_INCREMENT , `nombre_usuario` TEXT NOT NULL , `correo_usuario` TEXT NOT NULL , `contrasenia_usuario` TEXT NOT NULL , PRIMARY KEY (`id_usuario`)) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_spanish_ci;

*/


 ?>