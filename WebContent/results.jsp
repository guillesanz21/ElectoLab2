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
<body>

	<!-- Header -->
	<%@ include file="partials/header.jsp"%>

	<!-- Content -->
	<section class="container">

		<c:if test="${verSimulacion == true}">
			<h1 class="display-4" style="text-align: center">
				Resultado de la simulación nº ${simulacion.idSimulacion +1}</h1>
			<h2 class="display-4" style="text-align: center">
				El titulo de la ley es: ${simulacion.tituloLey}</h2>
			<h3 style="text-align: center">El autor de la simulacion fue:
				${simulacion.autor.nombre}</h3>
		</c:if>
		<c:if test="${verSimulacion == false}">
			<h1 class="display-4" style="text-align: center;">Resultado de su
			simulación</h1>
		</c:if>

		<div id="piechart_3d" style="width: auto; height: 500px;"></div>

		<!-- ################## Tabla de resultados ########################-->
		<table class="table" id="results-table">
			<thead class="thead-dark">
				<tr>
					<th scope="col">Decisión</th>
					<th scope="col">Votos</th>
					<th scope="col">Votos/Total</th>
				</tr>
			</thead>
			<tbody>
				<tr class="table-success">
					<th scope="row">A favor</th>
					<td>${simulacion.votos_favor}</td>
					<td>${simulacion.votos_favor}/350</td>
				</tr>
				<tr class="table-danger">
					<th scope="row">En contra</th>
					<td>${simulacion.votos_contra}</td>
					<td>${simulacion.votos_contra}/350</td>
				</tr>
				<tr class="table-warning">
					<th scope="row">Abstención</th>
					<td>${simulacion.votos_abstencion}</td>
					<td>${simulacion.votos_abstencion}/350</td>
				</tr>
				<tr class="table-primary">
					<th scope="row">Ausentes</th>
					<td>${simulacion.votos_ausente}</td>
					<td>${simulacion.votos_ausente}/350</td>
				</tr>
			</tbody>
		</table>

		<p>Se ha realizado una votación de tipo ${simulacion.tipoSimulacion}</p>


		<!-- ################## Tabla de partidos/diputados ########################-->
		<c:choose>

			<c:when test="${simulacion.tipoSimulacion == 'simple'}">
				<!-- Partidos -->

				<div class="container">
					<h2 class="h3Info">Lista de Partidos</h2>
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
				<div class="container">
					<h2 class="h3Info">Lista de Diputados</h2>
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
		<c:if test="${verSimulacion == false}">
			<!--Estudio de ley aprobada-->
			<%@ include file="FormLeyAprobada.jsp"%>


			<!--Save simulation-->
			<%@ include file="FormGuardaSimulacion.jsp"%>
		</c:if>
		<c:if test="${verSimulacion == true && simulacion.ley_aprobada == false}">
			<p>La ley ha sido rechazada</p>
			<p>El tipo de votación se realizó por "${simulacion.tipoMayoria}"</p>
		</c:if>
		<c:if test="${verSimulacion == true && simulacion.ley_aprobada == true}">
			<p>La ley ha sido aprobada</p>
			<p>El tipo de votación se realizó por "${simulacion.tipoMayoria}"</p>
		</c:if>

		<br> <br>
	</section>


	<!-- Footer -->
	<%@ include file="partials/footer.jsp"%>

</body>
</html>