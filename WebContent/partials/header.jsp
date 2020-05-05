<header
	class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-dark">


	<div class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand mr-0 mr-md-2" href="index.jsp"> <!-- Cambiar icono -->
			<img src="assets/images/congress.webp" width="30" height="30"
			class="d-inline-block align-top" alt="Icono del congreso" />
			ElectoLab
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse"
			data-target="#navbarNav" aria-controls="navbarNav"
			aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="navbar-nav-scroll" id="navbarNav">
			<ul class="navbar-nav bd-navbar-nav flex-row">
				<li class="nav-item"><a class="btn btn-outline-info"
					href="index.jsp"> Home <span class="sr-only">(current)</span></a></li>
				<li class="nav-item">
				<form action="FormVerListaSimulacionesGuardadasServlet">
						<button type="submit" class="btn btn-outline-info">Ver
							otras simulaciones</button>
					</form>
				</li>
				<li class="nav-item">
				<form method="get" action="InformationServlet">
						<button type="submit" class="btn btn-outline-info">Información</button>
					</form>
				</li>
			</ul>
		</div>
	</div>

	<ul class="navbar-nav ml-md-auto"></ul>

	<c:choose>
		<c:when test="${usuarioActivo != true}">
			<div style="margin-right: 10px;">
				<a class="btn btn-outline-success" role="button" href="Login.jsp">Login</a>
			</div>
			<div>
				<a class="btn btn-outline-primary" role="button" href="Registro.jsp">Registro</a>
			</div>
		</c:when>
		<c:when test="${usuarioActivo == true}">
			<a class="btn btn-outline-success">Bienvenido ${nombreUsuario}</a>
			<div style="margin-left: 10px;"><%@ include
					file="../FormLogout.jsp"%></div>
		</c:when>
	</c:choose>
</header>