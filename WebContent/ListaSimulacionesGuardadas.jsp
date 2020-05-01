<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<style>
table {
  margin: 15px;
  margin-right: 45px;
  padding: 15px;
  text-align: center;
  width: 80%;
}



</style>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!-- Bootstrap CSS -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous" />
<link rel="stylesheet" type="text/css" href="assets/css/main.css" />
<title>Simulaciones Guardadas</title>
</head>
<body>

	<!-- Header -->
	<%@ include file = "partials/header.jsp" %>
	
	

	<h2 style= "text-align: center;">Simulaciones guardadas</h2>

	<p style= "text-align: center;">
		<b>Número de Simulaciones: </b>${fn:length(Simulaciones)}</p>
<div>
	<h2 style= "text-align: center;">Simulaciones</h2>
	<table border="1" back>
		<tr style= "text-align: left;">


			<th >Titulo ley</th>

			<th>¿Aprobada?</th>

			<th>Autor</th>

		</tr>
		<c:forEach items="${Simulaciones}" var="simulacioni">
			<tr style= "text-align: left;">
				<td>${simulacioni.tituloLey}</td>
				<td>${simulacioni.ley_aprobada}</td>
				<td>${simulacioni.autor.nombre}</td>
				<td>
					<%@ include file="FormVerSimulacionGuardada.jsp"%>
				</td>

			</tr>
		</c:forEach>
	</table>
	</div>
	
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
