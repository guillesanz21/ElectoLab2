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
<link rel="stylesheet" type="text/css" href="assets/css/main.css?v=6" />
<title>Simulaciones Guardadas</title>
</head>
<body class="d-flex flex-column h-100">

	<!-- Header -->
	<%@ include file="partials/header.jsp"%>

	<!-- Main -->
	<main role="main" class="flex-shrink-0">

		<!-- titulo y numero de simulaciones -->
		<div
			class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">

			<h1 class="display-4">Simulaciones guardadas</h1>
			<p class="lead">
				Aquí puede encontrar una lista con todas las simulaciones guardadas
				por los analistas, ahora mismo contamos con un total de <b>${fn:length(Simulaciones)}</b>
				simulaciones. Estudie la simulación creada por alguno de ellos y no
				se complique creando una simulación.
			</p>
		</div>

		<!-- tabla de simulaciones -->
		<div class="container">
			<div class="shadow bg-light rounded">
				<table class="table table-striped" id="results-table">
					<thead>
						<tr>
							<th class="table-success" scop="col" colspan="4">Numero de
								simulaciones guardadas: ${fn:length(Simulaciones)}</th>
						</tr>
						<tr class="thead-dark text-center">
							<th scope="col">Titulo ley</th>
							<th scope="col">¿Aprobada?</th>
							<th scope="col">Autor</th>
							<th scope="col">Obtener simulación</th>
						</tr>
					</thead>
					<tbody class="text-center">
						<c:forEach items="${Simulaciones}" var="simulacioni">
							<tr>
								<th scope="row">${simulacioni.tituloLey}</th>
								<td>${simulacioni.ley_aprobada}</td>
								<td>${simulacioni.autor.nombre}</td>
								<td><%@ include file="FormVerSimulacionGuardada.jsp"%></td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
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
