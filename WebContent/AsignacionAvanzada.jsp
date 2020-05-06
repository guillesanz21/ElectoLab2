<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html class="h-100">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!-- Bootstrap CSS -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous" />
<link rel="stylesheet" type="text/css" href="assets/css/main.css" />
<link rel="stylesheet" type="text/css"
	href="assets/css/radioButtons.css" />
<script type="text/javascript" src="assets/js/simulacionAvanzada.js"></script>
<title>Simulación Avanzada</title>
</head>
<body class="d-flex flex-column h-100">
	<!-- Header -->
	<%@ include file="partials/header.jsp"%>

	<!-- Content -->
	<main role="main" class="flex-shrink-0">
		<!-- Cuadro con las instrucciones -->
		<div class="instrucciones rounded alert-success">
			<h4>
				Para realizar una simulación siga los siguientes pasos:
				</h1>
				<ul class="list">
					<li>Escoge en la lista desplegable el tipo de filtro (atributo) para la
						simulación</li>
					<ul>
						<li>Provincias</li>
						<li>Genero</li>
						<li>Estado civil</li>
					</ul>
					<li>Selecciona el voto de cada atributo del diputado seleccionado</li>
					<ul>
						<li>A favor, en contra o abstención</li>
					</ul>
					<li>Si lo desea complete el número de ausentes de cada atributo seleccionado</li>
					<ul>
						<li>Rellene la casilla con el número elegido y pulse
							actualizar</li>
					</ul>
				</ul>
		</div>


		<!-- Vista de los partidos barra y voton simular -->
		<section class="container container-simular">
			<form action="FormSimulacionAvanzadaServlet">
				<input type="hidden" name="tagJSON" id="tagJSON" value="" />

				<button id="simular-btn-simulation" class="btn btn-info">
					Simular</button>

				<!-- Las dos siguientes vistas se implementan en "Simulation.js" mediante MVC -->
				<div id="barra-view">
					<!-- La vista se incluye aquí -->
				</div>

				<!-- Default dropright button -->
				<div id="vistaSeleccion">
					<div class="btn-group dropright">
						<button type="button" class="btn btn-success dropdown-toggle"
							data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Desplegar</button>
						<div class="dropdown-menu" id="tagVista">
							<!-- Dropdown menu links -->
							<a class="dropdown-item" id="tagProvincia">Provincias</a>
							<a class="dropdown-item" id="tagGenero">Genero</a>
							<a class="dropdown-item" id="tagEstado">Estado civil</a>
						</div>
					</div>

				</div>

				<div id="listaTag-view">
					<!-- La vista se incluye aquí -->
				</div>

			</form>
		</section>
	</main>

	<!-- Footer -->
	<%@ include file="partials/footer.jsp"%>

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