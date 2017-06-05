<?php 

!isset($_POST)? die("acceso denegado") : '';
//require 'config/config.php';
require 'conexion.class.php';
$db = new Conexion();

if (isset($_POST['enter'])) {

		$conexion1 = mysqli_connect('localhost', 'root', '', 'ilearning');
		$userName = $_POST['usr_name'];
		$userEmail = $_POST['usr_email'];
		$userPass = $_POST['usr_pass'];

		$query = "INSERT INTO `usuarios`(`nombre_usuario`, `correo_usuario`, `contrasenia_usuario`) 
			VALUES ('$userName', '$userEmail', '$userPass')";


		$verificar_Usuario = mysqli_query($conexion1, "SELECT * FROM usuarios WHERE correo_usuario = '$userEmail'");

		if (mysqli_num_rows($verificar_Usuario) > 0) {
			echo "el usuario ya esta registrado";
			exit;
		}

		//$db->query($query);
		
		$resultado = mysqli_query($conexion1, $query);

		if (!resultado) {
			//echo "error al registrar";
			header("location: ../index.html");
		}
		else{
			//echo "registrado exitosamente";
			header("location: ../htdocs/bienvenido.html");
		}
	}

	
	mysqli_close($conexion1);	


 ?>

