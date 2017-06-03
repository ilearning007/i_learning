<?php 

!isset($_POST)? die("acceso denegado") : '';
require 'conexion.class.php';

$db = new Conexion();

if (isset($_POST['enter'])) {

	$userName = $_POST['usr_name'];
	$userEmail = $_POST['usr_email'];
	$userPass = $_POST['usr_pass_1'];

	$query = "INSERT INTO `usuarios`(`nombre_usuario`, `correo_usuario`, `contrasenia_usuario`) 
		VALUES ('$userName', '$userEmail', '$userPass')";

	$db->query($query);
}




 ?>