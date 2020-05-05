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