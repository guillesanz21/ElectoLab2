// ------------- MODELO DE DATOS -------------
let partidos = [
  {
    nameCode: "PSOE", // Usado de cara al codigo
    fullName: "PSOE", // Usado de cara a los usuarios
    seats: 120,
    vote: 0,
  },
  {
    nameCode: "PP", // Usado de cara al codigo
    fullName: "PP", // Usado de cara a los usuarios
    seats: 88,
    vote: 0,
  },
  {
    nameCode: "VOX", // Usado de cara al codigo
    fullName: "VOX", // Usado de cara a los usuarios
    seats: 52,
    vote: 0,
  },
  {
    nameCode: "UP", // Usado de cara al codigo
    fullName: "PODEMOS-UI", // Usado de cara a los usuarios
    seats: 35,
    vote: 0,
  },
  {
    nameCode: "ERC", // Usado de cara al codigo
    fullName: "ERC-SOBIRANISTES", // Usado de cara a los usuarios
    seats: 13,
    vote: 0,
  },
  {
    nameCode: "CS", // Usado de cara al codigo
    fullName: "CS", // Usado de cara a los usuarios
    seats: 10,
    vote: 0,
  },
  {
    nameCode: "JXCAT", // Usado de cara al codigo
    fullName: "JXCAT-JUNTS", // Usado de cara a los usuarios
    seats: 8,
    vote: 0,
  },
  {
    nameCode: "PNV", // Usado de cara al codigo
    fullName: "PNV", // Usado de cara a los usuarios
    seats: 7,
    vote: 0,
  },
  {
    nameCode: "BILDU", // Usado de cara al codigo
    fullName: "EH BILDU", // Usado de cara a los usuarios
    seats: 0,
    vote: 0,
  },
  {
    nameCode: "MP", // Usado de cara al codigo
    fullName: "MAS PAIS", // Usado de cara a los usuarios
    seats: 3,
    vote: 0,
  },
  {
    nameCode: "CUP", // Usado de cara al codigo
    fullName: "CUP-PR", // Usado de cara a los usuarios
    seats: 2,
    vote: 0,
  },
  {
    nameCode: "PNC", // Usado de cara al codigo
    fullName: "CCA-PNC-NC", // Usado de cara a los usuarios
    seats: 2,
    vote: 0,
  },
  {
    nameCode: "NA", // Usado de cara al codigo
    fullName: "NA+", // Usado de cara a los usuarios
    seats: 2,
    vote: 0,
  },
  {
    nameCode: "BNG", // Usado de cara al codigo
    fullName: "BNG", // Usado de cara a los usuarios
    seats: 1,
    vote: 0,
  },
  {
    nameCode: "PRC", // Usado de cara al codigo
    fullName: "PRC", // Usado de cara a los usuarios
    seats: 1,
    vote: 0,
  },
  {
    nameCode: "TE", // Usado de cara al codigo
    fullName: "Teruel Existe", // Usado de cara a los usuarios
    seats: 1,
    vote: 0,
  },
];
var favor = 0;
var contra = 0;
var diputados = 350;

// ------------- VISTAS -------------
// VISTA LISTA-PARTIDOS
const listaPartidosView = () => {
  let view = "";
  for (const partido of partidos) {
    view += `
			<div class="asignar-voto-partido">
				<img id="imgRedonda" src="assets/images/Partidos/${partido.nameCode}.png"> </img>
				<p class="partido">
					<b>${partido.fullName} </b> <i>[${partido.seats} escaños]</i>
				</p>
				<!-- Aqui los radio buttons -->
        <div class="botones">
        
					<label for="${partido.nameCode}1" class="radio" > 
					  <input type="radio" name="${partido.nameCode}" id="${partido.nameCode}1" class="hidden aFavor" /> 
              <span class="label"></span>A Favor
          </label>
          
          <label for="${partido.nameCode}2" class="radio" > 
            <input type="radio" name="${partido.nameCode}" id="${partido.nameCode}2" class="hidden enContra" /> 
              <span class="label"></span>En Contra
          </label> 
          
          <label for="${partido.nameCode}3" class="radio" > 
            <input type="radio"	name="${partido.nameCode}" id="${partido.nameCode}3" class="hidden abstencion" checked /> 
              <span class="label"></span>Abstención
          </label>
          
				</div>
				<!-- Aqui terminan los radio buttons -->
			</div>\n`;
  }
  return view;
};

// VISTA BARRA
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

// ------------- CONTROLADORES -------------
// CONTROLADOR LISTA-PARTIDOS
const listaPartidosContr = () => {
  document.getElementById("listaPartidos-view").innerHTML = listaPartidosView();
};
// CONTROLADOR BARRA
const barraContr = () => {
  document.getElementById("barra-view").innerHTML = barraView();
};

// ------------- INICIALIZACIÓN -------------
document.addEventListener("DOMContentLoaded", listaPartidosContr);
document.addEventListener("DOMContentLoaded", barraContr);

// ------------- EVENTOS ASOCIADOS A LA ASIGNACIÓN DE VOTO -------------
const loadEvents = () => {
  for (const partido of partidos) {
    // Favor
    document
      .getElementById(partido.nameCode + "1")
      .addEventListener("click", function () {
        if (partido.vote === -1) {
          // Si ya estaba en contra
          contra -= partido.seats;
          favor += partido.seats;
        }
        if (partido.vote === 0) {
          // Si ya se abstenia
          favor += partido.seats;
        }
        // Para la condición de que estuviese a favor no hacemos nada
        partido.vote = 1; // El partido esta ahora a favor
        barraContr();
      });

    // Contra
    document
      .getElementById(partido.nameCode + "2")
      .addEventListener("click", function () {
        if (partido.vote === 1) {
          // Si ya estaba a favor
          contra += partido.seats;
          favor -= partido.seats;
        }
        if (partido.vote === 0) {
          // Si ya se abstenia
          contra += partido.seats;
        }
        // Para la condición de que estuviese en contra no hacemos nada
        partido.vote = -1; // El partido esta ahora en contra
        barraContr();
      });

    // Abstención
    document
      .getElementById(partido.nameCode + "3")
      .addEventListener("click", function () {
        if (partido.vote === 1) {
          // Si ya estaba a favor
          favor -= partido.seats;
        }
        if (partido.vote === -1) {
          // Si ya estaba en contra
          contra -= partido.seats;
        }
        // Para la condición de que se abstubiese no hacemos nada
        partido.vote = 0; // El partido ahora se abstiene
        barraContr();
      });
  }
};

document.addEventListener("DOMContentLoaded", loadEvents);
