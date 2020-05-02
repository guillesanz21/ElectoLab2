let listaPartidos;
const loadPage = () => {

	$.getJSON('assets/js/json/partidos.json', data => {       
		listaPartidos = data.partidos;
		loadEvents(listaPartidos);
		barraContr();
	});
};

document.addEventListener("DOMContentLoaded", loadPage);

//------------- MODELO DE DATOS -------------
var favor = 0;
var contra = 0;
var diputados = 350;
var abstencion = diputados;
var ausentes = 0;

//------------- VISTAS -------------

//VISTA BARRA
const barraView = () => {
	return `
	<div id="simulation-header">
	<div class="progress">

	<div class="progress-bar bg-success" 
	role="progressbar" 
	style="width: ${(favor / diputados) * 100}%" 
	aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
	${Math.round((favor / diputados) * 100)}%
	</div>

	<div class="progress-bar bg-danger" 
	role="progressbar" 
	style="width: ${(contra / diputados) * 100}%" 
	aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
	${Math.round((contra / diputados) * 100)}%
	</div>

	<div class="progress-bar bg-warning" 
	role="progressbar" 
	style="width: ${(abstencion / diputados) * 100}%" 
	aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
	${Math.round((abstencion / diputados) * 100)}%
	</div>

	<div class="progress-bar bg-info" 
	role="progressbar" 
	style="width: ${Math.round((ausente / diputados) * 100)}%" 
	aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
	${Math.round((ausente / diputados) * 100)}%
	</div>

	</div>
	</div>\n`;
};

//------------- CONTROLADORES -------------
//CONTROLADOR BARRA
const barraContr = () => {
	document.getElementById("barra-view").innerHTML = barraView();
};


//------------- EVENTOS ASOCIADOS A LA ASIGNACIÓN DE VOTO -------------
const loadEvents = (listaPartidos) => {
	for (const partido of listaPartidos) {
		console.log(partido);
		//partido.ausentes = parseInt(partido.ausentes);
		//partido.ausentes = document.getElementById("");
		partido.seats = parseInt(partido.seats) - ausentes;
		// ###### Favor ###### 
		document
		.getElementById(partido.codeName + "1")
		.addEventListener("click", function () {
			if (partido.vote === "contra") {
				// Si ya estaba en contra
				contra -= partido.seats;
				favor += partido.seats;
			}
			if (partido.vote === "abstencion") {
				// Si ya se abstenia
				abstencion -= partido.seats;
				favor += partido.seats;
			}
			if (partido.vote === "ausente") {
				// si estaba ausente
				ausente -= partido.seats;
				favor += partido.seats;
			}
			// Para la condición de que estuviese a favor no hacemos nada
			partido.vote = "favor"; // El partido esta ahora a favor
			barraContr();
		});

		// ###### Contra ###### 
		document
		.getElementById(partido.codeName + "2")
		.addEventListener("click", function () {
			if (partido.vote === "favor") {
				// Si ya estaba a favor
				favor -= partido.seats;
				contra += partido.seats;
			}
			if (partido.vote === "abstencion") {
				// Si ya se abstenia
				abstencion -= partidos.seats;
				contra += partido.seats;
			}
			if (partido.vote === "ausente") {
				// si estaba ausente
				ausente -= partido.seats;
				contra += partido.seats;
			}
			// Para la condición de que estuviese en contra no hacemos nada
			partido.vote = "contra"; // El partido esta ahora en contra
			barraContr();
		});

		//  ###### Abstencion ###### 
		document
		.getElementById(partido.codeName + "3")
		.addEventListener("click", function () {
			if (partido.vote === "favor") {
				// Si ya estaba a favor
				favor -= partido.seats;
				abstencion += partidos.seats;
			}
			if (partido.vote === "contra") {
				// Si ya estaba en contra
				contra -= partido.seats;
				abstencion += partidos.seats;
			}
			if (partido.vote === "ausente") {
				// si estaba ausente
				ausente -= partido.seats;
				abstencion += partido.seats;
			}
			// Para la condición de que se abstubiese no hacemos nada
			partido.vote = "abstencion"; // El partido ahora se abstiene
			barraContr();
		});
		
	//  ###### Para los ausentes ###### 
		document
		.getElementById(partido.codeName + "4Send")
		.addEventListener("click", function () {
			
			partido.ausentes = document.getElementById(partido.codeName + "4").value; // El partido ahora esta ausente
			console.log(partido.ausentes);
			console.log("Tipo: " + typeof partido.ausentes);
			barraContr();
		});
	}
	/*
	 * Crea un JSON con partidos en el momento en el que se pulsa el boton simuar y lo envia al servlet
	 * 
	 */
	document
	.getElementById("simular-btn-simulation")
	.addEventListener("click", function () {
		let json = JSON.stringify(listaPartidos);

		document.getElementById('partidos').value = json;
	});


};
