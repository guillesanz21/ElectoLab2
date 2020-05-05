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
	href="assets/css/radioButtons.css?v=1" />
<!-- JS files -->
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/simulation.js?v=3"></script>
<title>Simulación</title>
</head>
<body class="d-flex flex-column h-100">
	<!-- Header -->
	<%@ include file="partials/header.jsp"%>

	<!-- Content -->
	<main role="main" class="flex-shrink-0">
		<!-- Cuadro con las instrucciones -->
		<div class="instrucciones rounded alert-success">
			<h4>Para realizar una simulacion siga los
				siguientes pasos:</h1>
			<ul class="list">
				<li>Selecciona el voto de cada partido</li>
				<ul>
					<li>A favor, en contra o abstención</li>
				</ul>
				<li>Si lo desea complete el numero de ausentes de cada partido</li>
				<ul>
					<li>Rellene la casilla con el numero elegido y pulse
						actualizar</li>
				</ul>
			</ul>
		</div>
		
		<!-- Vista de los partidos barra y voton simular -->
		<section class="container container-simular">
			<form action="FormSimulationSimpleServlet">
				<input type="hidden" name="partidos" id="partidos" value="" />
				<button id="simular-btn-simulation" class="btn btn-info">
					Simular</button>
				
				<!-- vista de la barra -->
				<div id="barra-view">
					<!--se incluye aquí -->
				</div>

				<!-- LA LISTA DE PARTIDOS -->
				<div id="listaPartidos-view">
					<c:forEach items="${partidos}" var="partido">
						<div class="asignar-voto-partido">
							<img id="imgRedonda"
								src="assets/images/Partidos/${partido.codeName}.png" />
							<p class="partido">
								<b>${partido.fullName} </b> <i>[${partido.seats} escaños]</i>
							</p>
							<!-- Aqui los radio buttons -->
							<div class="botones">

								<label for="${partido.codeName}1" class="radio"> <input
									type="radio" name="${partido.codeName}"
									id="${partido.codeName}1" class="hidden aFavor" /> <span
									class="label"></span>A Favor
								</label> <label for="${partido.codeName}2" class="radio"> <input
									type="radio" name="${partido.codeName}"
									id="${partido.codeName}2" class="hidden enContra" /> <span
									class="label"></span>En Contra
								</label> <label for="${partido.codeName}3" class="radio"> <input
									type="radio" name="${partido.codeName}"
									id="${partido.codeName}3" class="hidden abstencion" checked />
									<span class="label"></span>Abstención
								</label>
								<div class="form-enLinea">
									<div class="form-group mx-sm-3 mb-2">
										<label for="${partido.codeName}4" class="sr-only"></label> <input
											type="number" class="form-control" id="${partido.codeName}4"
											placeholder="Ausentes">
									</div>
									<p id="${partido.codeName}4Send" class="btn btn-primary mb-2">Actualizar</p>
								</div>

							</div>
						</div>
					</c:forEach>
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