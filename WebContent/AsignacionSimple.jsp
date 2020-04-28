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
    <!-- JS file responsible for load the partials -->
    <script type="text/javascript" src="assets/js/main.js"></script>
    <script type="text/javascript" src="assets/js/simulation.js"></script>
    <title>Simulación</title>
  </head>
  <body>
    <!-- Header -->
    <header class="header"></header>

    <!-- Content -->
    <section class="container container-simular">
      <form method="get" action="AsignacionSimpleServlet" >
        <input type="hidden" name="partidos" id="partidos" value="" />

        <button id="simular-btn-simulation" class="btn btn-info">
          Simular
        </button>

        <!-- Las dos siguientes vistas se implementan en "Simulation.js" mediante MVC -->
        <div id="barra-view">
          <!-- La vista se incluye aquí -->
        </div>


		<!-- LA LISTA DE PARTIDOS -->
		<div id="listaPartidos-view">
			<c:forEach items="${partidos}" var="partido">
				<div class="asignar-voto-partido">
					<img id="imgRedonda"
						src="assets/images/Partidos/${partido.nameCode}.png" />
					<p class="partido">
						<b>${partido.fullName} </b> <i>[${partido.seats} escaños]</i>
					</p>
					<!-- Aqui los radio buttons -->
					<div class="botones">

						<label for="${partido.nameCode}1" class="radio"> <input
							type="radio" name="${partido.nameCode}"
							id="${partido.nameCode}1" class="hidden aFavor" /> <span
							class="label"></span>A Favor
						</label> <label for="${partido.nameCode}2" class="radio"> <input
							type="radio" name="${partido.nameCode}"
							id="${partido.nameCode}2" class="hidden enContra" /> <span
							class="label"></span>En Contra
						</label> <label for="${partido.nameCode}3" class="radio"> <input
							type="radio" name="${partido.nameCode}"
							id="${partido.nameCode}3" class="hidden abstencion" checked />
							<span class="label"></span>Abstención
						</label>

					</div>
					<!-- Aqui terminan los radio buttons -->
				</div>
			</c:forEach>
		</div>

		</form>
    </section>

    <br />
    <br />
    <br />

    <!-- Footer -->
    <footer class="footer"></footer>

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