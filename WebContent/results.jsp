<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!-- Bootstrap CSS -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous" />
<link rel="stylesheet"
	href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
<link rel="stylesheet" type="text/css" href="assets/css/main.css" />

<script type="text/javascript"
	src="https://www.gstatic.com/charts/loader.js"></script>

<script type="text/javascript">
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ["Task", "Hours per Day"],
          ["Ausentes", ${simulacion.votos_ausente}],  
          ["En contra", ${simulacion.votos_contra}],
          ["Abstención", ${simulacion.votos_abstencion}],
          ["A favor", ${simulacion.votos_favor}]
        ]);

        var options = {
          title: "Resultado votación",
          is3D: false,
        };

        var chart = new google.visualization.PieChart(
          document.getElementById("piechart_3d")
        );
        chart.draw(data, options);
      }
    </script>
<script type="text/javascript" src="assets/js/ley_aprobada.js?v=1"></script>
<!-- Bootstrap required JS -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"
	integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
	integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
	crossorigin="anonymous"></script>
<script
	src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
	integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
	crossorigin="anonymous"></script>
<script
	src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
	integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
	crossorigin="anonymous"></script>
<script
	src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script>
   $(document).ready( function () {
   	     $('#myTable').DataTable();
	} )
</script>


<title>Resultados de la simulación</title>

</head>
<body class="bodyResultados">

	<!-- Header -->
	<%@ include file="partials/header.jsp"%>

	<!-- Content -->
	<section class="container">

		<c:if test="${verSimulacion == true}">
			<h2 class="display-4" style="text-align: center; margin-top: 40px">
				El titulo de la ley es: ${simulacion.tituloLey}</h2>
		</c:if>
		<c:if test="${verSimulacion == false}">
			<h1 class="display-4" style="text-align: center; margin-top: 40px;">Resultado
				de su simulación</h1>
		</c:if>

		<div id="piechart_3d" style="width: auto; height: 500px;"></div>

		<!-- ################## Tabla de resultados ########################-->
		<table class="table shadow-lg p-3 mb-5 rounded border border-dark"
			id="results-table">
			<caption class="text-right">
				Tipo de votación realizada: <b>${simulacion.tipoSimulacion}</b>
			</caption>
			<thead>
				<tr>
					<th class="border border-dark bg- text-center" scop="col"
						colspan="3">Tabla de la simulación tipo
						${simulacion.tipoSimulacion}</th>
				</tr>
				<tr class="thead-dark">
					<th scope="col">Decisión</th>
					<th class="text-center" scope="col">Votos</th>
					<th class="text-center" scope="col">Votos/Total</th>
				</tr>
			</thead>
			<tbody>
				<tr class="table-success">
					<th scope="row">A favor</th>
					<td class="text-center">${simulacion.votos_favor}</td>
					<td class="text-center">${simulacion.votos_favor}/350</td>
				</tr>
				<tr class="table-danger">
					<th scope="row">En contra</th>
					<td class="text-center">${simulacion.votos_contra}</td>
					<td class="text-center">${simulacion.votos_contra}/350</td>
				</tr>
				<tr class="table-warning">
					<th scope="row">Abstención</th>
					<td class="text-center">${simulacion.votos_abstencion}</td>
					<td class="text-center">${simulacion.votos_abstencion}/350</td>
				</tr>
				<tr class="table-primary">
					<th scope="row">Ausentes</th>
					<td class="text-center">${simulacion.votos_ausente}</td>
					<td class="text-center">${simulacion.votos_ausente}/350</td>
				</tr>
			</tbody>
		</table>

		<!-- ################## Tabla de partidos/diputados ########################-->
		<c:choose>

			<c:when test="${simulacion.tipoSimulacion == 'simple'}">
				<!-- Partidos -->

				<div
					class="shadow-lg p-3 mb-5 rounded border border-dark p-1 mb-1 bg-light rounded">
					<h3 class="h3Info text-dark">Lista de Partidos que componen el
						Congreso:</h3>
					<table class="table table-fluid" id="myTable">
						<thead>
							<tr>
								<th class="th-sm">Nombre</th>
								<th class="th-sm">Voto</th>
								<th class="th-sm">Escaños</th>
								<th class="th-sm">Ausentes</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach items="${simulacion.votoPartido}" var="partido">
								<tr>
									<td>${partido.fullName}</td>
									<td>${partido.vote}</td>
									<td>${partido.seats}</td>
									<td>${partido.ausentes}</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</c:when>


			<c:otherwise>
				<!-- Diputados -->

				<div
					class="shadow-lg p-3 mb-5 rounded border border-dark p-1 mb-1 bg-light rounded">
					<h3 class="h3Info text-dark">Diputados que componen el
						Congreso:</h3>
					<table class="table table-fluid" id="myTable">
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Voto</th>
								<th>Edad</th>
								<th>Provincia</th>
								<th>Género</th>
								<th>Partido</th>
								<th>Estado Civil</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach items="${simulacion.votoDiputado}" var="diputado">
								<tr>
									<td>${diputado.nombre}</td>
									<td>${diputado.vote}</td>
									<td>${diputado.edad}</td>
									<td>${diputado.provincia}</td>
									<td>${diputado.genero}</td>
									<td>${diputado.partido.fullName}</td>
									<td>${diputado.estado_civil}</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</c:otherwise>
		</c:choose>

		<div class="card-deck mb-3">
			<c:if test="${verSimulacion == false}">
				<div
					class="instruccionesGuardaSimu card mb-4 shadow-sm rounded alert-success">
					<h4>Para saber si la ley es aprobada o rechazada</h4>
					<ul class="list">
						<li>Escoge el tipo de mayoria que necesita cumplir la ley</li>
						<ul>
							<li>Mayoría absoluta: la ley se aprueba con 176 votos a
								favor</li>
							<li>Mayoría simple: la ley se aprueba con más votos a favor
								que en contra</li>
							<li>Mayoría cualificada</li>
							<ul>
								<li>Introduzca en el cuadro que aparece el porcentaje mínimo de votos que requiere la ley</li>
								<li>La ley se aprueba siempre que los votos a favor superen el porcentaje especificado por el usuario</li>
							</ul>
						</ul>
					</ul>
					<c:if test="${emailUsuario != null }">
						<h4>Para guardar la simulación</h4>
						<ul class="list">
							<li>Después de realizar los pasos anteriores</li>
							<li>Escriba el nombre de la ley simulada</li>
							<li>Pulse el botón guardar</li>
						</ul>
					</c:if>
				</div>
			</c:if>
			<div class="card mb-4 shadow-sm rounded">

				<c:if test="${verSimulacion == false}">
					<div class="card-body">
						<div class="botonesTipoMayoria">
							<!--Estudio de ley aprobada-->
							<%@ include file="FormLeyAprobada.jsp"%>
						</div>

						<!--Save simulation-->
						<%@ include file="FormGuardaSimulacion.jsp"%>
					</div>
				</c:if>

				<c:if
					test="${verSimulacion == true && simulacion.ley_aprobada == false}">
					<div class="card-header text-uppercase table-info text-center">
						<h3>Información de la Ley</h3>
					</div>
					<div class="card-body">
						<ul class="list">
							<li>La ley ha sido <mark>rechazada</mark></li>
							<li>El tipo de votación se realizó por <mark>${simulacion.tipoMayoria}</mark>
							</li>
						</ul>
					</div>

				</c:if>
				<c:if
					test="${verSimulacion == true && simulacion.ley_aprobada == true}">
					<div class="card-header text-uppercase table-info text-center">
						<h3>Información de la Ley</h3>
					</div>
					<div class="card-body">
						<ul class="list">
							<li>La ley ha sido <mark>aprobada</mark></li>
							<li>El tipo de votación se realizó por <mark>${simulacion.tipoMayoria}</mark>
							</li>
						</ul>
					</div>
				</c:if>
			</div>
			<c:if test="${verSimulacion == true}">
				<div class="card mb-4 shadow-sm rounded">
					<div class="card-header text-uppercase table-info text-center">
						<h3>Información de la simulación</h3>
					</div>
					<div class="card-body">
						<ul class="list">
							<li>Resultado de la simulación <mark>nº ${simulacion.idSimulacion +1}</mark></li>
							<li>El autor de la simulacion fue: <mark>${simulacion.autor.nombre}</mark>
							</li>
						</ul>
					</div>
				</div>
			</c:if>
		</div>
	</section>
	
	


	<!-- Footer -->
	<%@ include file="partials/footer.jsp"%>

</body>
</html>