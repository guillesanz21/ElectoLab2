let listaDiputados;
let tagSeleccionado;
// tags
let listaTag;

const loadPage = () => {

	$.getJSON('assets/js/json/diputados.json', data => {       
		listaDiputados = data.diputados;
		desplegableTags();
		console.log(listaDiputados);
		barraContr();
	});
};

document.addEventListener("DOMContentLoaded", loadPage);
 

//------------- MODELO DE DATOS -------------
var favor = 0;
var contra = 0;
var diputados = 350;
var ausentes = 0;


//-------------- VISTA DE LOS TAGs ---------
const listaTagView = (listaTag) => {
	let view =`
		<div>
		<p class = "btn btn-light"> <b> ${tagSeleccionado} </b> </p>
		
		</div>`	
	
	for (const tagObject of listaTag.lista) {
		tag = tagObject.tagElement;
		view += `
			<div class="asignar-voto-provincia">

			<p class="partido">
				<b>${tag} </b> <i>[${tagObject.seats} escaños]</i>
			</p>
			
			<b>${tag} </b> 
			</p>
			
			<!-- Aqui los radio buttons -->
			<div class="botones">

			<label for="${tag}1" class="radio" > 
			<input type="radio" name="${tag}" id="${tag}1" class="hidden aFavor" /> 
			<span class="label"></span>A Favor
			</label>

			<label for="${tag}2" class="radio" > 
			<input type="radio" name="${tag}" id="${tag}2" class="hidden enContra" /> 
			<span class="label"></span>En Contra
			</label> 

			<label for="${tag}3" class="radio" > 
			<input type="radio"	name="${tag}" id="${tag}3" class="hidden abstencion" checked /> 
			<span class="label"></span>Abstención
			</label>
			<form class="form-inline">
			<div class="form-group mx-sm-3 mb-2">
			<label for="${tag}4" class="sr-only"></label> <input
			type="number" class="form-control" id="${tag}4"
			placeholder="Ausentes">
			</div>
			<p id="${tag}4Send" class="btn btn-primary mb-2">Actualizar</p>
			</form>

			</div>
			<!-- Aqui terminan los radio buttons -->
			</div>\n`;
		
	}
	return view; 
}


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
//CONTROLADOR LISTA-TAG
const listaTagContr = () => {
	//Cojo el valor del tag seleccionado (sexo,provincia) y con este valor intentare recorrer el array y haciendo una lista.
	listaTag = getTagJSON (listaDiputados, tagSeleccionado);
	document.getElementById("listaTag-view").innerHTML = listaTagView(listaTag);
	loadEvents();
};


const getTagJSON = (original, tagName) => {
	let compressed = [];

	// make a copy of the input array
	let copy = original.slice(0);

	// first loop goes over every element
	for (const originalTag of original) {
		let myCount = 0;
		// loop over every element in the copy and see if it's the same
		for (const w in copy) {
			if (originalTag[tagName] == copy[w][tagName]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}

		if (myCount > 0) {
			let tagArray = {};
			tagArray.tagElement = originalTag[tagName];
			tagArray.seats = myCount;
			tagArray.vote = "abstencion";
			tagArray.ausentes = 0;
			compressed.push(tagArray);
		}
	}
	let tagVote = {};
	tagVote.tag = tagName;
	tagVote.lista = compressed;
	return tagVote;
};


//CONTROLADOR BARRA
const barraContr = () => {
	document.getElementById("barra-view").innerHTML = barraView();
};




//------------- EVENTOS ASOCIADOS A LA ASIGNACIÓN DE VOTO -------------

const desplegableTags = () => {
	//<----- TAG PROVINCIA ----->
	document
	.getElementById("tagProvincia")
	.addEventListener("click", function () {
		tagSeleccionado = "provincia";
		listaTagContr();
	});
	//<----- TAG GENERO ----->
	document
	.getElementById("tagGenero")
	.addEventListener("click", function () {
		tagSeleccionado = "genero";
		listaTagContr();
	});
	
	//<----- TAG ESTADO CIVIL ----->
	document
	.getElementById("tagEstado")
	.addEventListener("click", function () {
		tagSeleccionado = "estado_civil";
		listaTagContr();
	});
	//<----- TAG FECHA NACIMIENTO ----->
	document
	.getElementById("tagFecha")
	.addEventListener("click", function () {
		tagSeleccionado = "rangoEdad";
		listaTagContr();
	});
	//<----- TAG PARTIDO POLITICO ----->
	/*document
	.getElementById("tagPartidos")
	.addEventListener("click", function () {
		tagSeleccionado = "partido_codename";
		listaTagContr();
	}); */
}

const loadEvents = () => {
	for (const tag of listaTag.lista) {
		tag.seats = parseInt(tag.seats);
		tag.ausentes = parseInt(tag.ausentes);
		console.log("INICIO: presentes " + parseInt(parseInt(tag.seats) - parseInt(tag.ausentes)) + ", seats: " + tag.seats + ", ausentes: " + tag.ausentes);
		
	
		// ###### Favor ###### 
		document
		.getElementById(tag.tagElement + "1")
		.addEventListener("click", function () {
			if (tag.vote === "contra") {
				// Si ya estaba en contra
				contra -= parseInt(parseInt(tag.seats) - parseInt(tag.ausentes));
				favor += parseInt(parseInt(tag.seats) - parseInt(tag.ausentes));
			}
			if (tag.vote === "abstencion") {
				// Si ya se abstenia
				favor += parseInt(parseInt(tag.seats) - parseInt(tag.ausentes));
			}
			// Para la condición de que estuviese a favor no hacemos nada
			tag.vote = "favor"; // El tag esta ahora a favor
			console.log("Favor presentes " + parseInt(parseInt(tag.seats) - parseInt(tag.ausentes)) + ", seats: " + tag.seats + ", ausentes: " + tag.ausentes);
			barraContr();
		});

		// ###### Contra ###### 
		document
		.getElementById(tag.tagElement + "2")
		.addEventListener("click", function () {
			if (tag.vote === "favor") {
				// Si ya estaba a favor
				favor -= parseInt(parseInt(tag.seats) - parseInt(tag.ausentes));
				contra += parseInt(parseInt(tag.seats) - parseInt(tag.ausentes));
			}
			if (tag.vote === "abstencion") {
				// Si ya se abstenia
				contra += parseInt(parseInt(tag.seats) - parseInt(tag.ausentes));
			}
			// Para la condición de que estuviese en contra no hacemos nada
			tag.vote = "contra"; // El tag esta ahora en contra
			console.log("Contra presentes " + parseInt(parseInt(tag.seats) - parseInt(tag.ausentes)) + ", seats: " + tag.seats + ", ausentes: " + tag.ausentes);
			barraContr();
		});

		//  ###### Abstencion ###### 
		document
		.getElementById(tag.tagElement + "3")
		.addEventListener("click", function () {
			console.log(tag);
			if (tag.vote === "favor") {
				// Si ya estaba a favor
				favor -= parseInt(parseInt(tag.seats) - parseInt(tag.ausentes));
			}
			if (tag.vote === "contra") {
				// Si ya estaba en contra
				contra -= parseInt(parseInt(tag.seats) - parseInt(tag.ausentes));
			}
			// Para la condición de que se abstubiese no hacemos nada
			tag.vote = "abstencion"; // El tag ahora se abstiene
			console.log("Abs presentes " + parseInt(parseInt(tag.seats) - parseInt(tag.ausentes)) + ", seats: " + tag.seats + ", ausentes: " + tag.ausentes);
			barraContr();
		});
		
	//  ###### Para los ausentes ###### 
		document
		.getElementById(tag.tagElement + "4Send")
		.addEventListener("click", function () {
			numAusentes =  document.getElementById(tag.tagElement + "4").value;
			if (numAusentes <= tag.seats) {
				tag.ausentes = numAusentes; // El tag ahora esta ausente
				ausentes = numAusentes;
			}
			barraContr();
		});
		tag.seats = tag.seats.toString();
		tag.ausentes = tag.ausentes.toString();
	}
	/*
	 * Crea un JSON con tags en el momento en el que se pulsa el boton simuar y lo envia al servlet
	 * 
	 */
	document
	.getElementById("simular-btn-simulation")
	.addEventListener("click", function () {
		let json = JSON.stringify(listaTag);
		document.getElementById('tagJSON').value = json;
		console.log(json);
	});


};

