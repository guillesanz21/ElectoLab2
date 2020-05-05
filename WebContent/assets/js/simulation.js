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
var abstencion = 0;
var diputados = 350;
var ausentes = 0;

//------------- VISTAS -------------

//VISTA BARRA
const barraView = () => {
	return `
	<div id="simulation-header">
	<div class="progress">

	<div class="progress-bar bg-success" 
	role="progressbar" 
	style="width: ${((favor) / diputados) * 100}%" 
	aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
	${Math.round((favor / diputados) * 100)}%
	</div>

	<div class="progress-bar bg-danger" 
	role="progressbar" 
	style="width: ${((contra) / diputados) * 100}%" 
	aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
	${Math.round((contra / diputados) * 100)}%
	</div>

	<div class="progress-bar bg-warning" 
	role="progressbar" 
	style="width: ${((diputados - favor - contra - ausentes) / diputados) * 100}%" 
	aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
	${Math.round(((diputados - favor - contra - ausentes) / diputados) * 100)}%
	</div>

	<div class="progress-bar bg-secondary" 
	role="progressbar" 
	style="width: ${(ausentes / diputados) * 100}%" 
	aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
	${Math.round((ausentes / diputados) * 100)}%
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
		partido.seats = parseInt(partido.seats);
		partido.ausentes = parseInt(partido.ausentes);
		console.log("INICIO: presentes " + parseInt(parseInt(partido.seats) - parseInt(partido.ausentes)) + ", seats: " + partido.seats + ", ausentes: " + partido.ausentes);
		
	
		// ###### Favor ###### 
		document
		.getElementById(partido.codeName + "1")
		.addEventListener("click", function () {
			if (partido.vote === "contra") {
				// Si ya estaba en contra
				contra -= parseInt(parseInt(partido.seats) - parseInt(partido.ausentes));
				favor += parseInt(parseInt(partido.seats) - parseInt(partido.ausentes));
			}
			if (partido.vote === "abstencion") {
				// Si ya se abstenia
				favor += parseInt(parseInt(partido.seats) - parseInt(partido.ausentes));
				abstencion -= parseInt(parseInt(partido.seats) - parseInt(partido.ausentes));

			}
			// Para la condición de que estuviese a favor no hacemos nada
			partido.vote = "favor"; // El partido esta ahora a favor
			console.log("Favor presentes " + parseInt(parseInt(partido.seats) - parseInt(partido.ausentes)) + ", seats: " + partido.seats + ", ausentes: " + partido.ausentes);
			barraContr();
		});

		// ###### Contra ###### 
		document
		.getElementById(partido.codeName + "2")
		.addEventListener("click", function () {
			if (partido.vote === "favor") {
				// Si ya estaba a favor
				favor -= parseInt(parseInt(partido.seats) - parseInt(partido.ausentes));
				contra += parseInt(parseInt(partido.seats) - parseInt(partido.ausentes));
			}
			if (partido.vote === "abstencion") {
				// Si ya se abstenia
				contra += parseInt(parseInt(partido.seats) - parseInt(partido.ausentes));
				abstencion -= parseInt(parseInt(partido.seats) - parseInt(partido.ausentes));

			}
			// Para la condición de que estuviese en contra no hacemos nada
			partido.vote = "contra"; // El partido esta ahora en contra
			console.log("Contra presentes " + parseInt(parseInt(partido.seats) - parseInt(partido.ausentes)) + ", seats: " + partido.seats + ", ausentes: " + partido.ausentes);
			barraContr();
		});

		//  ###### Abstencion ###### 
		document
		.getElementById(partido.codeName + "3")
		.addEventListener("click", function () {
			if (partido.vote === "favor") {
				// Si ya estaba a favor
				abstencion += parseInt(parseInt(partido.seats) - parseInt(partido.ausentes));
				favor -= parseInt(parseInt(partido.seats) - parseInt(partido.ausentes));
			}
			if (partido.vote === "contra") {
				// Si ya estaba en contra
				abstencion += parseInt(parseInt(partido.seats) - parseInt(partido.ausentes));
				contra -= parseInt(parseInt(partido.seats) - parseInt(partido.ausentes));
			}
			// Para la condición de que se abstubiese no hacemos nada
			partido.vote = "abstencion"; // El partido ahora se abstiene
			console.log("Abs presentes " + parseInt(parseInt(partido.seats) - parseInt(partido.ausentes)) + ", seats: " + partido.seats + ", ausentes: " + partido.ausentes);
			barraContr();
		});
		
	//  ###### Para los ausentes ###### 
		document
		.getElementById(partido.codeName + "4Send")
		.addEventListener("click", function () {
			numAusentes = parseInt( document.getElementById(partido.codeName + "4").value );
			
			if (parseInt(numAusentes) <= parseInt(partido.seats) && parseInt(numAusentes) > 0) { 
				partido.ausentes = numAusentes; // El partido ahora esta ausente
				ausentes = parseInt(numAusentes);
			} else if (parseInt(numAusentes) > parseInt(partido.seats)) {
				partido.ausentes = partido.seats;
				ausentes = parseInt(partido.seats);
				alert("Partido: " + partido.codeName + " Escaños: " + partido.seats + " Ausentes: " + partido.ausentes);
				//alert("Número de ausentes demasiado grande, se asignan: " + partido.seats + " ausentes");
			} else {
				partido.ausentes = "0"; // El partido ahora esta ausente
				ausentes = "0";
				alert("Introduce un número de ausentes correcto");
			}
			partido.seats = partido.seats.toString();
			partido.ausentes = partido.ausentes.toString();
			console.log(partido);
			barraContr();
			
		});
		partido.seats = partido.seats.toString();
		partido.ausentes = partido.ausentes.toString();
		console.log(partido)

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
		console.log(json);
	});


};
