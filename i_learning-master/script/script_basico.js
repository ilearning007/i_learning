 	
 	var tamanoNavbar = document.getElementById("contenedor-barra-navegacion").offsetHeight;
	// Obtine el tamaño de la ventana del usuario (navegador)
	var altoVentanUsuario = (window.innerHeight);

 	var ventanPrimeraVista = document.getElementById("ventana-primera-vista");
    tamanototal = altoVentanUsuario - tamanoNavbar;
	ventanPrimeraVista.style.height = tamanototal + "px";