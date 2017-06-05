var preguntas = [
	"If she _____, she would have passed the exam",
	"If _______ so much, i wouldn't have left sick",
	"If we____ a taxi, we wouldn't have missed the plane",
	"He ________ if he had gone to bed earlier",
	"She ________ a teacher if she had gone to university"
];



var respuestas =[

	["had studied" ,"have studied", "had study", "have study"],
	["hadn't eaten", "hadn't eat", "hadn't ate", "haven't eaten"],
	["had taken", "have taken", "have take", "had take"],
	["would not have been", "would not had been", "had been", "would not been"],
	["would have become", "would had become", "had become", "would become"]

];
jugar();
		var indicie_respuesta_correcta;

function jugar(){

var indice_aleatorio = Math.floor(Math.random()*preguntas.length);

var respuestas_posibles = respuestas[indice_aleatorio];

		var posiciones = [0,1,2,3];
		var respuestas_reordenadas = [];

		var ya_se_metio = false;
		for(i in respuestas_posibles){
			var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
			if(posicion_aleatoria==0 && ya_se_metio == false){
				indicie_respuesta_correcta =i;
				ya_se_metio = true;
			}
			respuestas_reordenadas[i] = respuestas_posibles[posiciones[posicion_aleatoria]];
			posiciones.splice(posicion_aleatoria, 1);
		}

var txt_respuestas = "";
for (i in respuestas_reordenadas) {
	txt_respuestas += '<input type="button" name="res" value="'+respuestas_reordenadas[i]+'"><br>'
	;
}
document.getElementById("respuesta").innerHTML = txt_respuestas;
document.getElementById("pregunta").innerHTML = preguntas[indice_aleatorio];
}


function comprobar() {
	var respuesta = $("input[type=button]:checked").val;

	if (preguntas = 5){ 
		switch(respuesta){
			case 0:
			Burro
			break;
			case 1:
			1/5
			break;
			case 2:
			2/5
			break;
			case 3:
			3/5
			break;
			case 4:
			4/5
			break;
			case 5:
			5/5
			break;
		}	
	}
}

