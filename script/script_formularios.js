var btnSubmit = document.getElementById("btn-submit");

function cursorIn(){
	btnSubmit.style.cursor = "pointer";
	btnSubmit.style.backgroundColor = "#1976D2";
}

function cursorOut(){
	/* Regrsar a su color original */
	btnSubmit.style.backgroundColor = "#42A5F5";
}

/*
 *	Placeholder
*/
document.getElementById("in-user").placeholder = "Username";
document.getElementById("in-password").placeholder = "Password";

btnSubmit.addEventListener("mouseover", cursorIn);
btnSubmit.addEventListener("mouseout", cursorOut);
