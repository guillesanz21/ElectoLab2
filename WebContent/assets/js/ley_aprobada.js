let tipoMayoria = "";
let leyAprobada = false;
let favor;
let contra;
let abstencion;
let ausentes;
let situacionDeLaPropuestaDeLey;


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
		document.getElementById("SimulationLeyAprobada").innerHTML = vistaAbsoluta();

	} else if (tipoMayoria === "mayoria_simple") {
		mayoriaSimple();
		document.getElementById("SimulationLeyAprobada").innerHTML = vistaSimple();


	} else if (tipoMayoria === "mayoria_cualificada") {
		mayoriacualificada();
		document.getElementById("SimulationLeyAprobada").innerHTML = vistacualificada();

	}

	document.getElementById("LeyAprobada").value = leyAprobada === true ? "aprobada" : "rechazada";
	document.getElementById("TipoMayoria").value = tipoMayoria;


};

const vistaAbsoluta = () => {
	let situacionDeLaPropuestaDeLey = leyAprobada ? "Ley aprobada" : "Ley rechazada";
	let view =`
		<div>
		<p><b>${situacionDeLaPropuestaDeLey} </b></p>\n`
		if (leyAprobada) {
			view += `
				<p>La ley ha sido aprobada por mayoría absoluta, dado que los votos a favor superan el 50% (176 escaños) de la cámara.</p>\n

				`
		} else {
			view += `
				<p>La ley ha sido rechazada, dado que los votos a favor no superan el 50% (176 escaños) de la cámara.</p>\n

				`
		}
	view += `</div>`	
		return view;
}

const vistaSimple = () => {
	let situacionDeLaPropuestaDeLey = leyAprobada ? "Ley aprobada" : "Ley rechazada";

	let view =`
		<div>
		<p><b>${situacionDeLaPropuestaDeLey} </b></p>\n`
		if (leyAprobada) {
			view += `
				<p>La ley ha sido aprobada por mayoría simple, dado que los votos a favor superan a los votos en contra.</p>\n

				`
		} else {
			view += `
				<p>La ley ha sido rechazada, dado que los votos a favor no superan a los votos en contra.</p>\n

				`
		}
	view += `</div>`	
		return view;
}
const vistacualificada = () => {
	let situacionDeLaPropuestaDeLey = leyAprobada ? "Ley aprobada" : "Ley rechazada";

	let view =`
		<div>
		<p><b>${situacionDeLaPropuestaDeLey} </b></p>\n`
		if (leyAprobada) {
			view += `
				<p>La ley ha sido aprobada por mayoría cualificada, dado que los votos a favor superan el porcentaje cualificado especificado por el usuario.</p>\n

				`
		} else {
			view += `
				<p>La ley ha sido rechazada, dado que los votos a favor no superan el porcentaje cualificado especificado por el usuario.</p>\n

				`
		}
	view += `</div>`	
		return view;
}
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

/*
const mayoriacualificada = () => {
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
 */

const mayoriacualificada = () => {
	let porcentajeMinimoCualificada = Math.round(parseInt(prompt("Introduzca el porcentaje mínimo de votos a favor para aprobar la ley: ")));
	if (porcentajeMinimoCualificada < 0 || porcentajeMinimoCualificada > 100) {
		porcentajeMinimoCualificada = 75;
		porcentajeMinimoCualificada = prompt("Por favor, introduzca un valor correcto: ")
	}
	const votos_FavorMinimos = Math.round((350*porcentajeMinimoCualificada)/100);
	if (favor < votos_FavorMinimos) {
		leyAprobada = false;
	} else {
		leyAprobada = true;
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
		tipoMayoria = "mayoria_cualificada";
		calculoAprobacion();
	});
};



document.addEventListener("DOMContentLoaded", loadPage);