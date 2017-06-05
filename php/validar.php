<?php 
require 'config/config.php';

$usuario = $_POST['usrname'];
$clave = $_POST['pass'];


$conexion = mysqli_connect("localhost", "root", "", "ilearning");
$consulta = "SELECT * FROM usuarios WHERE nombre_usuario='$usuario' and contrasenia_usuario='$clave'";
$resultado=mysqli_query($conexion, $consulta);

$filas=mysqli_num_rows($resultado);

if ($filas > 0) {
	header("location: ../htdocs/bienvenido.html");
}
else{
	header("location: ../index.html?i");
}

mysqli_free_result($resultado);
mysqli_close($conexion);

 ?>