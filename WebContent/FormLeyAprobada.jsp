<div class="btn-group btn-group-toggle" data-toggle="buttons" style="align: center">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="mayoria1" autocomplete="off"> Mayoría Absoluta
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="mayoria2" autocomplete="off"> Mayoría Simple
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="mayoria3" autocomplete="off"> Mayoría Condicionada
  </label>
</div>

<input type="hidden" name="SimulationFavor" id="SimulationFavor" value="${simulacion.votos_favor}" />
<input type="hidden" name="SimulationContra" id="SimulationContra" value="${simulacion.votos_contra}" />
<input type="hidden" name="SimulationAbstencion" id="SimulationAbstencion" value="${simulacion.votos_abstencion}" />
<input type="hidden" name="SimulationAusentes" id="SimulationAusentes" value="${simulacion.votos_ausente}" />
<p id="SimulationLeyAprobada"></p>


<c:choose>
<c:when test="${simulacion.ley_aprobada != true }">

		<h2>Propuesta de ley rechazada</h2>

	</c:when>


	<c:when test="${simulacion.ley_aprobada == true  }">

		<h2>Propuesta de ley aceptada</h2>
</c:when>
</c:choose>

<c:choose>

	<c:when test="${simulacion2.votos_favor > 176 }">

		<h2>Mayoria absoluta, más de 176 votos a favor.</h2>
	</c:when>


	<c:when test="${simulacion2.votos_favor > simulacion2.votos_contra}">
		<h2>Propuesta de ley aceptada por mayoria simple, mas votos a
			favor que en contra.</h2>
	</c:when>
	
	<c:when test="${simulacion2.votos_contra > simulacion2.votos_favor}">
		<h2>Propuesta de ley rechazada, por mayoria simple, mas votos en
			contra que a favor.</h2>
	</c:when>

	<c:when test="${(simulacion2.votos_contra + simulacion2.votos_favor + simulacion2.votos_abstencion) < (175)  }">
		<h2>Propuesta de ley rechazada, por no haber mas del 50% de los diputados presentes</h2>
	</c:when>
	
	<c:when test="${((simulacion2.votos_contra + simulacion2.votos_favor + simulacion2.votos_abstencion) > 175) && (simulacion2.votos_favor > simulacion2.votos_contra)}">		
			<h2>Propuesta de ley aceptada por mayoria condicionada (un 50% de los diputados estan presentes)</h2>
	</c:when>

	<c:when test="${ ( (simulacion2.votos_contra + simulacion2.votos_favor + simulacion2.votos_abstencion) > 175) && (simulacion2.votos_favor < simulacion2.votos_contra)}">		
			<h2>Propuesta de ley rechazada mas votos en contra con mayoria condicionada (un 50% de los diputados estan presentes)</h2>
	</c:when>
		
</c:choose>