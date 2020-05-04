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
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" type="text/css" href="assets/css/main.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/radioButtons.css" />
    <script type="text/javascript" src="assets/js/simulacionAvanzada.js"></script>
    <title>Simulación Avanzadan</title>
  </head>
  <body>
   <!-- Header -->
	<%@ include file = "partials/header.jsp" %>

    <!-- Content -->
    <section class="container container-simular">
      <form action="AsignacionAvanzadaServlet" >
        <input type="hidden" name="partidos" id="tagJSON" value="" />

        <button id="simular-btn-simulation" class="btn btn-info">
          Simular
        </button>

        <!-- Las dos siguientes vistas se implementan en "Simulation.js" mediante MVC -->
        <div id="barra-view">
          <!-- La vista se incluye aquí -->
        </div>
        
     <!--  
        <div>
          <input type="text" id="tagSelection" placeholder="Pon el tag aquí" />
          <p class="btn btn-success" id="botonTag">Seleccionar</p>
        </div>
       
			<!-- Default dropright button -->
			<div id= "vistaSeleccion" >
			<div class="btn-group dropright">
				<button type="button" class="btn btn-secondary dropdown-toggle"
					data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Desplegar</button>
				<div class="dropdown-menu" id = "tagVista">
					<!-- Dropdown menu links -->
					<p class="dropdown-item" id="tagProvincia">	Provincias </p> 
					<p class="dropdown-item" id="tagGenero">	Genero </p> 
					<p class="dropdown-item" id="tagFecha">		Año de nacimiento</p>
					<p class="dropdown-item" id="tagEstado">	Estado civil</p>
					<p class="dropdown-item" id="tagPartidos">	Partidos</p>
				</div>
			</div>

</div>

			<div id="listaTag-view">
          <!-- La vista se incluye aquí -->
        </div>
        
      </form>
    </section>

    <br />
    <br />
    <br />

    <!-- Footer -->
	<%@ include file = "partials/footer.jsp" %>

    <!-- Bootstrap required JS -->
    <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossorigin="anonymous"
    ></script>
  </body>
</html>