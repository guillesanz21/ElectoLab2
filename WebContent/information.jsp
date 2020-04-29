<!DOCTYPE html>
<html lang="en">
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
<link rel="stylesheet" type="text/css" href="assets/css/main.css?v=1" />
<!-- JS file responsible for load the partials -->
<script type="text/javascript" src="assets/js/main.js?v=1"></script>
<title>Informacion sobre el congreso</title>
</head>

<body>
	<!-- Header -->
	<header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-dark">
		<div class="header-1"></div>
		<ul class="navbar-nav ml-md-auto"></ul>
		
		<c:choose>
			<c:when test="${usuarioActivo != true}">
				<div style="margin-right: 10px;" ><a class="btn btn-outline-success" role="button" href="Login.jsp">Login</a></div>
				<div ><a class="btn btn-outline-primary" role="button" href="Registro.jsp">Registro</a></div>
			</c:when>
			<c:when test="${usuarioActivo == true}">
					<a class="btn btn-outline-success">Bienvenido ${nombreUsuario}</a>
					<div style="margin-left: 10px;"><%@ include file = "FormLogout.jsp" %></div>
			</c:when>
			</c:choose>
	</header>
	
	
	<div class="container">
		<h1 class="display-3 screenHeader">Información</h1>
		<p>En este apartado se describirán algunos detalles fundamentales
			de la política española, como cuál es su constitución, además de
			listar a los 350 diputados junto con detalles como sus años de
			nacimiento. Al final también se mencionarán cuales son los periódicos
			con más relevancia nacional.</p>

		<!-- ################## INFO (CAROUSEL) ################### -->
		<h3 class="h3Info">Información básica:</h3>
		<div class="carousel slide" id="main-carousel" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#main-carousel" data-slide-to="0" class="active"></li>
				<li data-target="#main-carousel" data-slide-to="1"></li>
				<li data-target="#main-carousel" data-slide-to="2"></li>
				<li data-target="#main-carousel" data-slide-to="3"></li>
			</ol>
			<!-- /.carousel-indicators -->

			<div class="carousel-inner">
				<div class="carousel-item active">
					<img class="d-block img-fluid"
						src="assets/images/EdificioCongreso.jpg" alt="Información" />
					<div class="carousel-caption d-none d-md-block">
						<h1>Información</h1>
						<p>Pulse las flechas de los laterales para navegar por la
							información</p>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block img-fluid"
						src="assets/images/CongresoDiputados.jpg"
						alt="Congreso de los Diputados" />
					<div class="carousel-caption d-none d-md-block">
						<h3>Congreso de los Diputados</h3>
						<p>El Congreso de los Diputados es la Cámara Baja de las
							Cortes Generales, el órgano constitucional que representa a
							pueblo español</p>
						<p>
							El Congreso se compone de <strong>350 diputados</strong>,
							elegidos por sugragio universal, libre, igual, directo y sectro
						</p>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block img-fluid" src="assets/images/pedro.jpg"
						alt="Pedro Sánchez" />
					<div class="carousel-caption d-none d-md-block">
						<h3>Presidente del Gobierno</h3>
						<p>
							El actual presidente del Gobierno es Pedro Sánchez (PSOE), a
							quien corresponde dirigir la acción del ejecutivo y coordinar las
							funciones de los demás miembros del mismo, como establece la <strong>Constitución</strong>.
						</p>
						<p>
							Su investidura se realiza en el <strong>Congreso de los
								Diputados</strong> y es nombrado por el rey.
						</p>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block img-fluid" src="assets/images/Constitucion.jpg"
						alt="Constitución" />
					<div class="carousel-caption d-none d-md-block">
						<h3>Constitución</h3>
						<p>
							<strong>La Constitución española de 1978</strong> es la norma
							suprema del ordenamiento jurídico español, a la que están sujetos
							todos los poderes públicos y ciudadanos de España, desde su
							entrada en vigor el 29 de diciembre de 1978.
						</p>
					</div>
				</div>
			</div>
			<!-- /.carousel-inner -->

			<a href="#main-carousel" class="carousel-control-prev"
				data-slide="prev"> <span
				class="carousel-control-prev-icon"></span> <span class="sr-only"
				aria-hidden="true">Prev</span>
			</a> <a href="#main-carousel" class="carousel-control-next"
				data-slide="next"> <span
				class="carousel-control-next-icon"></span> <span class="sr-only"
				aria-hidden="true">Next</span>
			</a>
		</div>
		<!-- /.carousel -->

		<!-- ################## LISTA/TABLA DIPUTADOS ################### -->
		<h3 class="h3Info">Diputados que componen el Congreso:</h3>
		<!-- Hacer con JSP leyendo de la BBDD ===> diseñar la celda de 1 solo diputado y hacer bucle for sobre esta -->

		<!-- ################## PERIODICOS ################### -->
		<h3 class="h3Info">Periódicos con mayor relevancia nacional:</h3>
		<ul class="periodicos">
			<li><a href="https://www.elmundo.es/">El mundo</a></li>
			<li><a href="https://www.larazon.es/">La razón</a></li>
			<li><a href="https://www.abc.es/">ABC</a></li>
			<li><a href="https://elpais.com/">El país</a></li>
			<li><a href="https://www.elconfidencial.com/">El
					confidencial</a></li>
			<li><a href="https://www.lavanguardia.com/">La Vanguardia</a></li>
		</ul>
	</div>

	<br />
	<br />

	<footer class="footer"></footer>

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