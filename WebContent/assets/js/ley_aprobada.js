let tipoMayoria = "";
let leyAprobada = false;
let favor;
let contra;
let abstencion;
let ausentes;

const loadPage = () => {
	loadEvents();
	favor = parseInt(document.getElementById("SimulationFavor").value);
	contra = parseInt(document.getElementById("SimulationContra").value);
	abstencion =  parseInt(document.getElementById("SimulationAbstencion").value);
	ausentes =  parseInt(document.getElementById("SimulationAusentes").value);
};


const calculoAprobacion = () => {
	if (tipoMayoria === "mayoria_absoluta") {
		mayoriaAbsoluta();
	} else if (tipoMayoria === "mayoria_simple") {
		mayoriaSimple();
	} else if (tipoMayoria === "mayoria_condicionada") {
		mayoriaCondicionada();
	}
	let SimulationLeyAprobada = document.getElementById("SimulationLeyAprobada");
	if (leyAprobada) {
		SimulationLeyAprobada.textContent = "Aprobada";
	} else {
		SimulationLeyAprobada.textContent = "Rechazada";
	}
	
};


const mayoriaSimple = () => {
	if (favor > contra) {
		leyAprobada = true;
	} else {
		leyAprobada = false;
	}
};


const mayoriaAbsoluta = () => {
	if (favor > 175) {
		leyAprobada = true;
	} else {
		leyAprobada = false;
	}
};


const mayoriaCondicionada = () => {
	let participacionMinima = Math.round(parseInt(prompt("Introduzca el porcentaje mínimo de participación: ")));
	if (participacionMinima < 0 || participacionMinima > 100) {
		participacionMinima = 75;
		participacionMinima = prompt("Por favor, introduzca un valor correcto: ")
	}
	const participacion = Math.round(((favor + contra + abstencion)/350)*100);
	if (participacionMinima > participacion) {
		leyAprobada = false;
	} else {
		mayoriaSimple();
	}
};



const loadEvents = () => {
	document.getElementById("mayoria1").addEventListener("click", function () {
		tipoMayoria = "mayoria_absoluta";
		calculoAprobacion();
	});
	document.getElementById("mayoria2").addEventListener("click", function () {
		tipoMayoria = "mayoria_simple";
		calculoAprobacion();
	});
	document.getElementById("mayoria3").addEventListener("click", function () {
		tipoMayoria = "mayoria_condicionada";
		calculoAprobacion();
	});
};



document.addEventListener("DOMContentLoaded", loadPage);