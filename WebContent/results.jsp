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
<link rel="stylesheet" type="text/css" href="assets/css/main.css" />

<script type="text/javascript"
	src="https://www.gstatic.com/charts/loader.js"></script>

<script type="text/javascript">
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ["Task", "Hours per Day"],
          ["A favor", ${simulacion.votos_favor}],
          ["En contra", ${simulacion.votos_contra}],
          ["Abstención", ${simulacion.votos_abstencion}],
          ["Ausentes", ${simulacion.votos_ausente}]
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
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

<title>Resultados de la simulación</title>

</head>
<body>

	<!-- Header -->
	<%@ include file = "partials/header.jsp" %>

	<!-- Content -->
	<section class="container">
		<h1 class="display-4" style="text-align: center; color: black;">
			Resultado de su simulación</h1>
		<div id="piechart_3d" style="width: 900px; height: 500px;"></div>

		<!--Tabla de resultados-->
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

			</tbody>
		</table>


		<!--Estudio de ley aprobada-->
		<%@ include file="FormLeyAprobada.jsp"%>

		<!--Save simulation-->
		<%@ include file="FormGuardaSimulacion.jsp"%>


	</section>


	<!-- Footer -->
	<%@ include file = "partials/footer.jsp" %>

	<!-- Bootstrap required JS -->
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"
		integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
		crossorigin="anonymous"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
		integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
		crossorigin="anonymous"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
		integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
		crossorigin="anonymous"></script>
</body>
</html>