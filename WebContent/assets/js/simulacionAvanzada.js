let listaDiputados;
let tagSeleccionado;
// tags
let listaProvincias;
let listaGenero;
let listaEstado_civil;
let listaEdad;

const loadPage = () => {

	$.getJSON('assets/js/json/diputados.json', data => {       
		listaDiputados = data.diputados;
		prueba(listaDiputados);
		console.log(listaDiputados)
		loadEvents();
		//barraContr();
	});
};

document.addEventListener("DOMContentLoaded", loadPage);
 

const prueba = (listaDiputados) => {
	//<----- TAG PROVINCIA ----->
	document
	.getElementById("tagProvincia")
	.addEventListener("click", function () {
		tagSeleccionado = "provincia";
		listaTagContr(listaDiputados);
	});
	//<----- TAG GENERO ----->
	document
	.getElementById("tagGenero")
	.addEventListener("click", function () {
		tagSeleccionado = "genero";
		listaTagContr(listaDiputados);
	});
	
	//<----- TAG ESTADO CIVIL ----->
	document
	.getElementById("tagEstado")
	.addEventListener("click", function () {
		tagSeleccionado = "estadoCivil";
		listaTagContr(listaDiputados);
	});
	//<----- TAG FECHA NACIMIENTO ----->
	document
	.getElementById("tagFecha")
	.addEventListener("click", function () {
		tagSeleccionado = "rangoEdad";
		listaTagContr(listaDiputados);
	});
	//<----- TAG PARTIDO POLITICO ----->
	document
	.getElementById("tagPartidos")
	.addEventListener("click", function () {
		tagSeleccionado = "partido";
		listaTagContr(listaDiputados);
	});
}

//------------- MODELO DE DATOS -------------
var favor = 0;
var contra = 0;
var diputados = 350;
var ausentes = 0;

//--------------VISTA DE LAS PROVINCIAS---------
const listaProvinciasView = (listaProvincias) => {
	
	
	let view =`
	<div>
	<p class = "btn btn-light"> <b> PROVINCIAS </b> </p>
	
	</div>`
	
	
	for (const provincia of listaProvincias) {
		view += `
			<div class="asignar-voto-provincia">

			<p class="provincia">
			
			<b>${provincia.tag} </b> 
			</p>
			
			<!-- Aqui los radio buttons -->
			<div class="botones">

			<label for="${provincia}1" class="radio" > 
			<input type="radio" name="${provincia}" id="${provincia}1" class="hidden aFavor" /> 
			<span class="label"></span>A Favor
			</label>

			<label for="${provincia}2" class="radio" > 
			<input type="radio" name="${provincia}" id="${provincia}2" class="hidden enContra" /> 
			<span class="label"></span>En Contra
			</label> 

			<label for="${provincia}3" class="radio" > 
			<input type="radio"	name="${provincia}" id="${provincia}3" class="hidden abstencion" checked /> 
			<span class="label"></span>Abstención
			</label>
			<form class="form-inline">
			<div class="form-group mx-sm-3 mb-2">
			<label for="${provincia}4" class="sr-only"></label> <input
			type="number" class="form-control" id="${provincia}4"
			placeholder="Ausentes">
			</div>
			<p id="${provincia}4Send" class="btn btn-primary mb-2">Actualizar</p>
			</form>

			</div>
			<!-- Aqui terminan los radio buttons -->
			</div>\n`;
		
	}
	return view; 


}

//--------------VISTA DE LOS RANGOS DE EDAD ---------
const listaRangoEdadView = (listaRangoEdad) => {
	let view =`
		<div>
		<p class = "btn btn-light"> <b> EDAD </b> </p>
		
		</div>`
	
	
	for (const edad of listaRangoEdad) {
		view += `
			<div class="asignar-voto-provincia">

			<p class="edad">
			
			<b>${edad.tag} </b> 
			</p>
			
			<!-- Aqui los radio buttons -->
			<div class="botones">

			<label for="${edad}1" class="radio" > 
			<input type="radio" name="${edad}" id="${edad}1" class="hidden aFavor" /> 
			<span class="label"></span>A Favor
			</label>

			<label for="${edad}2" class="radio" > 
			<input type="radio" name="${edad}" id="${edad}2" class="hidden enContra" /> 
			<span class="label"></span>En Contra
			</label> 

			<label for="${edad}3" class="radio" > 
			<input type="radio"	name="${edad}" id="${edad}3" class="hidden abstencion" checked /> 
			<span class="label"></span>Abstención
			</label>
			<form class="form-inline">
			<div class="form-group mx-sm-3 mb-2">
			<label for="${edad}4" class="sr-only"></label> <input
			type="number" class="form-control" id="${edad}4"
			placeholder="Ausentes">
			</div>
			<p id="${edad}4Send" class="btn btn-primary mb-2">Actualizar</p>
			</form>

			</div>
			<!-- Aqui terminan los radio buttons -->
			</div>\n`;
		
	}
	return view; 


	
}

//--------------VISTA DE LOS GENEROS---------
const listaGeneroView = (listaGenero) => {
	let view =`
		<div>
		<p class = "btn btn-light"> <b> GENERO </b> </p>
		
		</div>`
	
	for (const genero of listaGenero) {
		view += `
			<div class="asignar-voto-provincia">

			<p class="genero">
			
			<b>${genero.tag} </b> 
			</p>
			
			<!-- Aqui los radio buttons -->
			<div class="botones">

			<label for="${genero}1" class="radio" > 
			<input type="radio" name="${genero}" id="${genero}1" class="hidden aFavor" /> 
			<span class="label"></span>A Favor
			</label>

			<label for="${genero}2" class="radio" > 
			<input type="radio" name="${genero}" id="${genero}2" class="hidden enContra" /> 
			<span class="label"></span>En Contra
			</label> 

			<label for="${genero}3" class="radio" > 
			<input type="radio"	name="${genero}" id="${genero}3" class="hidden abstencion" checked /> 
			<span class="label"></span>Abstención
			</label>
			<form class="form-inline">
			<div class="form-group mx-sm-3 mb-2">
			<label for="${genero}4" class="sr-only"></label> <input
			type="number" class="form-control" id="${genero}4"
			placeholder="Ausentes">
			</div>
			<p id="${genero}4Send" class="btn btn-primary mb-2">Actualizar</p>
			</form>

			</div>
			<!-- Aqui terminan los radio buttons -->
			</div>\n`;
		
	}
	return view; 
}

//--------------VISTA DE LOS ESTADO---------
const listaEstadoCivilView = (listaEstadoCivil) => {
	
	let view =`
		<div>
		<p class = "btn btn-light"> <b> ESTADO CIVIL </b> </p>
		
		</div>`	
	
	for (const estado of listaEstadoCivil) {
		view += `
			<div class="asignar-voto-provincia">

			<p class="estado">
			
			<b>${estado.tag} </b> 
			</p>
			
			<!-- Aqui los radio buttons -->
			<div class="botones">

			<label for="${estado}1" class="radio" > 
			<input type="radio" name="${estado}" id="${estado}1" class="hidden aFavor" /> 
			<span class="label"></span>A Favor
			</label>

			<label for="${estado}2" class="radio" > 
			<input type="radio" name="${estado}" id="${estado}2" class="hidden enContra" /> 
			<span class="label"></span>En Contra
			</label> 

			<label for="${estado}3" class="radio" > 
			<input type="radio"	name="${estado}" id="${estado}3" class="hidden abstencion" checked /> 
			<span class="label"></span>Abstención
			</label>
			<form class="form-inline">
			<div class="form-group mx-sm-3 mb-2">
			<label for="${estado}4" class="sr-only"></label> <input
			type="number" class="form-control" id="${estado}4"
			placeholder="Ausentes">
			</div>
			<p id="${estado}4Send" class="btn btn-primary mb-2">Actualizar</p>
			</form>

			</div>
			<!-- Aqui terminan los radio buttons -->
			</div>\n`;
		
	}
	return view; 

}

//--------------VISTA DE LOS PARTIDO---------
const listaPartidosView = (listaPartidos) => {
	let view =`
		<div>
		<p class = "btn btn-light"> <b> PARTIDOS </b> </p>
		
		</div>`	
	
	for (const partidos of listaPartidos) {
		view += `
			<div class="asignar-voto-provincia">

			<p class="partidos">
			
			<b>${partidos.tag} </b> 
			</p>
			
			<!-- Aqui los radio buttons -->
			<div class="botones">

			<label for="${partidos}1" class="radio" > 
			<input type="radio" name="${partidos}" id="${partidos}1" class="hidden aFavor" /> 
			<span class="label"></span>A Favor
			</label>

			<label for="${partidos}2" class="radio" > 
			<input type="radio" name="${partidos}" id="${partidos}2" class="hidden enContra" /> 
			<span class="label"></span>En Contra
			</label> 

			<label for="${partidos}3" class="radio" > 
			<input type="radio"	name="${partidos}" id="${partidos}3" class="hidden abstencion" checked /> 
			<span class="label"></span>Abstención
			</label>
			<form class="form-inline">
			<div class="form-group mx-sm-3 mb-2">
			<label for="${partidos}4" class="sr-only"></label> <input
			type="number" class="form-control" id="${partidos}4"
			placeholder="Ausentes">
			</div>
			<p id="${partidos}4Send" class="btn btn-primary mb-2">Actualizar</p>
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
	style="width: ${((diputados - favor - contra) / diputados) * 100}%" 
	aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
	${Math.round(((diputados - favor - contra) / diputados) * 100)}%
	</div>

	</div>
	</div>\n`;
};

//------------- CONTROLADORES -------------
//CONTROLADOR LISTA-TAG
const listaTagContr = () => {
	//Cojo el valor del tag seleccionado (sexo,provincia) y con este valor intentare recorrer el array y haciendo una lista.
	if (tagSeleccionado === "provincia") {
		listaProvincias = getListaProvincias();
		console.log(listaProvincias);
		console.log(listaProvincias.length);
		document.getElementById("listaTag-view").innerHTML = listaProvinciasView(listaProvincias);
	}
	else if (tagSeleccionado === "genero") {
		listaGenero = getListaGenero();
		console.log(listaGenero);
		console.log(listaGenero.length);
		document.getElementById("listaTag-view").innerHTML = listaGeneroView(listaGenero);
	}
	else if (tagSeleccionado === "estadoCivil") {
		listaEstadoCivil = getListaEstadoCivil();
		console.log(listaEstadoCivil);
		console.log(listaEstadoCivil.length);
		document.getElementById("listaTag-view").innerHTML = listaEstadoCivilView(listaEstadoCivil);
	}
	else if (tagSeleccionado === "rangoEdad") {
		listaRangoEdad = getListaRangosEdad();
		console.log(listaRangoEdad);
		console.log(listaRangoEdad.length);
		document.getElementById("listaTag-view").innerHTML = listaRangoEdadView(listaRangoEdad);
	}
	else if (tagSeleccionado === "partido") {
		listaPartidos = getListaPartidos();
		console.log(listaPartidos);
		console.log(listaPartidos.length);
		document.getElementById("listaTag-view").innerHTML = listaPartidosView(listaPartidos);
	}
};

const getListaProvincias = () => {
	//Nos saca ya un array con las provincias
	console.log("Entra")
	
	const listaProvincia = Array.from(new Set(listaDiputados.map(s => s.provincia))).map(provincia =>
	{ 
		return {
		tag: provincia,

		/*lista: [
			{
=======
		lista: [
			{   
>>>>>>> 62c556ec3d7fc645ada7a66f12a2d34083570eeb
				"provincia": "Madrid",
				"seats": "30",
				"voto": "favor",
				"ausentes": "13"
			},
			{
				"provincia": "Valencia",
				"seats": "20",
				"voto": "contra",
				"ausentes": "3"
			}
		*/
			
	};
	});
	return listaProvincia
}

const getListaGenero = () => {
	//Nos saca ya un array con los géneros
	const listaGenero = Array.from(new Set(listaDiputados.map(s => s.sexo))).map(sexo =>
	{ return {
		tag: sexo
	};
	});
	return listaGenero
}

const getListaEstadoCivil = () => {
	//Nos saca ya un array con el estado civil
	const listaEstadoCivil = Array.from(new Set(listaDiputados.map(s => s.estado_civil))).map(estado_civil =>
	{ return {
		tag: estado_civil
	};
	});
	return listaEstadoCivil
}

const getListaRangosEdad = () => {
	//Nos saca ya un array con las provincias
	const listaRangoEdad = Array.from(new Set(listaDiputados.map(s => s.nacimiento))).map(nacimiento =>
	{ return {
		tag: nacimiento
	};
	});
	return listaRangoEdad
}

const getListaPartidos = () => {
	//Nos saca ya un array con los partidos
	const listaPartidos = Array.from(new Set(listaDiputados.map(s => s.partido))).map(partido =>
	{ return {
		tag: partido
	};
	});

return listaPartidos
}






//CONTROLADOR BARRA
const barraContr = () => {
	document.getElementById("barra-view").innerHTML = barraView();
};






//------------- EVENTOS ASOCIADOS A LA ASIGNACIÓN DE VOTO -------------
const loadEvents = () => {
	for (const diputado of diputados) {
		// Favor
		document
		.getElementById(partido.nameCode + "1")
		.addEventListener("click", function () {
			if (diputado.vote === -1) {
				// Si ya estaba en contra
				contra -= 1;
				favor += 1;
			}
			if (partido.vote === 0) {
				// Si ya se abstenia
				favor += 1;
			}
			// Para la condición de que estuviese a favor no hacemos nada
			partido.vote = 1; // El partido esta ahora a favor
			barraContr();
		});

		// Contra
		document
		.getElementById(partido.nameCode + "2")
		.addEventListener("click", function () {
			if (diputado.vote === 1) {
				// Si ya estaba a favor
				contra += 1;
				favor -= 1;
			}
			if (partido.vote === 0) {
				// Si ya se abstenia
				contra += 1;
			}
			// Para la condición de que estuviese en contra no hacemos nada
			partido.vote = -1; // El partido esta ahora en contra
			barraContr();
		});

		// Abstención
		document
		.getElementById(partido.nameCode + "3")
		.addEventListener("click", function () {
			if (diputado.vote === 1) {
				// Si ya estaba a favor
				favor -= 1;
			}
			if (partido.vote === -1) {
				// Si ya estaba en contra
				contra -= 1;
			}
			// Para la condición de que se abstubiese no hacemos nada
			partido.vote = 0; // El partido ahora se abstiene
			barraContr();
		});
	}
	/*
	 * Crea un SON con partidos en el momento en el que se pulsa el boton simuar y lo envia al servlet
	 */
	document
	.getElementById("simular-btn-simulation")
	.addEventListener("click", function () {
		let json = JSON.stringify(diputados);

		document.getElementById('diputados').value = json;
	});
};



/*
<div id="listaPartidos-view">
			<c:forEach items="${diputados}" var="partido">
				<div class="asignar-voto-partido">
					<p class="partido">
						<b>${diputado.nombre} </b> <i>[${diputado.partido} escaños]</i>
					</p>
					<!-- Aqui los radio buttons -->
					<div class="botones">			
							
						<label for="${diputado.nombre}1" class="radio">
								<input type="radio" name="${diputado.nombre}"
								id="${diputado.nombre}1" class="hidden aFavor" /> <span
								class="label"></span>A Favor
							</label> 
							
							<label for="${diputado.nombre}2" class="radio">
								<input type="radio" name="${diputado.nombre}"
								id="${diputado.nombre}2" class="hidden enContra" /> <span
								class="label"></span>En Contra
							</label> 
							
							<label for="${diputado.nombre}3" class="radio">
								<input type="radio" name="${diputado.nombre}"
								id="${diputado.nombre}3" class="hidden abstencion" checked />
								<span class="label"></span>Abstención
							</label>
							<form class="form-inline">
								<div class="form-group mx-sm-3 mb-2">
									<label for="${diputado.nombre}4" class="sr-only"></label> <input
										type="number" class="form-control" id="${diputado.nombre}4"
										placeholder="Ausentes">
								</div>
								<p id="${diputado.nombre}4Send" class="btn btn-primary mb-2">Actualizar</p>
							</form>

						</div>
						</div>
			</c:forEach>
				</div>
				
*/