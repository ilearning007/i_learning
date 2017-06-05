<?php 
require 'config/config.php';

$usuario = $_POST['usrname'];
$clave = $_POST['pass'];


$conexion = mysqli_connect("localhost", "root", "", "ilearning");
$consulta = "SELECT * FROM usuarios WHERE nombre_usuario='$usuario' and contrasenia_usuario='$clave'";
$resultado=mysqli_query($conexion, $consulta);

$filas=mysqli_num_rows($resultado);

if ($filas > 0) {

			if ($usuario == 'pepe') {
				header("location: ../htdocs/bienvenido.html?b");
			} 
			elseif (isset($_GET['c'])) {
				echo "Carlos@hotmail.com";
			}
			elseif (isset($_GET['j'])) {
				echo "JosecruzGaxiola@hotmail.com";
			}
			elseif (isset($_GET['b'])) {
				echo "BraulioCadena@hotmail.com";
			}
			else{
				echo "sorry, we have an error with the database";
			}
	
}
else{
	header("location: ../index.html?i");
}

mysqli_free_result($resultado);
mysqli_close($conexion);

 ?>