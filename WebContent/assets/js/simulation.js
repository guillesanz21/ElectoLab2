
var afavor= 0;
var contra= 0;
var abstencion =0;
var diputados = 350;
var psoe = 120;
var votos = 0;
var psoeC = 0;


function refreshResults () {
	var results = document.getElementById('results');
	
	resutls.innerHTML = 'total: ' (diputados);
	results.innerHTML += '<br> A favor: ' + afavor;
	results.innerHTML += '<br> En contra: ' + contra;
	results.innerHTML += '<br> Abstencion: ' + abstencion;
}

let partidos = 

for (clave) {
	// favor
	document.getElementByClass(clave + '1').addEventListener('click', function () {
		afavor = afavor + valor;
	}
	// contra
	document.getElementByClass(clave + '2').addEventListener('click', function () {
		contra = contra + valor;
	}
	// abs
	document.getElementByClass(clave + '3').addEventListener('click', function () {
		abs = abs + valor;
	}
}

document.getElementByClass('PSOE1').addEventListener('click', function () {
	  votos = psoe *1;
	
	  
	  
	  refreshResults();
	});


document.getElementById('PSOE2').addEventListener('click', function () {
	votos = psoe *(-1);
	psoeC = 120; 
	
	  refreshResults();
	});

document.getElementById('PSOE3').addEventListener('click', function () {
	  votos = psoe *0;
	  refreshResults();
	});
/*
<html>
<head>
<script>
function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
</script>
</head>
<body>

<p><button onclick="clickCounter()" type="button">Click me!</button></p>
<div id="result"></div>
<p>Click the button to see the counter increase.</p>
<p>Close the browser tab (or window), and try again, and the counter will continue to count (is not reset).</p>

</body>
</html>
*/