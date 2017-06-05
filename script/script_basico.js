 function efectoTargeta(){

 			divEstructura = document.getElementById("Estructura");
 			divEstructura.style.backgroundColor = "#F5F5F5";
 			divEstructura.style.width = "85%";
 }	

 function efectoTargetaSalir(){

 			divEstructura = document.getElementById("Estructura");
 			divEstructura.style.backgroundColor = "#fff";
 			divEstructura.style.width = "80%";
 }


 	var tamanoNavbar = document.getElementById("contenedor-barra-navegacion").offsetHeight;
	// Obtine el tamaño de la ventana del usuario (navegador)
	var altoVentanUsuario = (window.innerHeight);

 	var ventanPrimeraVista = document.getElementById("ventana-primera-vista");
    tamanototal = altoVentanUsuario - tamanoNavbar;
	ventanPrimeraVista.style.height = tamanototal + "px";

	var linkEstructura = document.getElementById("link-estructura");
	linkEstructura.addEventListener("mouseover", efectoTargeta);
	linkEstructura.addEventListener("mouseout", efectoTargetaSalir);





