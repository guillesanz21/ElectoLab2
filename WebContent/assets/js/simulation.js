
var favor = 0;
var contra = 0;
var diputados = 350;
const cargarPartidos = () => {
	var partidos = document.querySelector("#partidos").value;
	console.log(partidos);
	

		
	
}


document.addEventListener("DOMContentLoaded", cargarPartidos);

// ------------- EVENTOS ASOCIADOS A LA ASIGNACIÓN DE VOTO -------------
/*
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 <!-- LA BARRA DE PROGRESION -->
				<div id="simulation-header">
					<div class="progress"> 

						<div class="progress-bar bg-success" role="progressbar"
							style="width: ${(favor / diputados) * 100}%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">${Math.round((favor / diputados) * 100)}% 
						</div>

						<div class="progress-bar bg-danger" role="progressbar"
							style="width: ${(contra / diputados) * 100}%" aria-valuenow="30"
							aria-valuemin="0" aria-valuemax="100">${Math.round((contra / diputados) * 100)}%
						</div>

						<div class="progress-bar bg-warning" role="progressbar"
							style="width: ${((diputados - favor - contra) / diputados) * 100}%"
							aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
							${Math.round(((diputados - favor - contra) / diputados) * 100)}%
						</div>

					</div>
				</div> 
 
 
 
 
 * const loadEvents = () => {
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
  
  */


  /*
   * Crea un SON con partidos en el momento en el que se pulsa el boton simuar y lo envia al servlet
   */
/*
  document
  .getElementById("simular-btn-simulation")
  .addEventListener("click", function () {
	  let json = JSON.stringify(partidos);
	 
	  document.getElementById('partidos').value = json;
  });
};

document.addEventListener("DOMContentLoaded", loadEvents);

*/
