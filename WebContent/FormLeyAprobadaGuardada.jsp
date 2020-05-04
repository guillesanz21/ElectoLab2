<c:choose>
<c:when test="${simulacion2.ley_aprobada != true }">

		<h2>Propuesta de ley rechazada</h2>

	</c:when>


	<c:when test="${simulacion2.ley_aprobada == true  }">

		<h2>Propuesta de ley aceptada</h2>

		
	</c:when>
	</c:choose>
	
	<c:choose>
<c:when test="${simulacion2.votos_favor > 176 }">

		<h2>Mayoria absoluta, más de 176 votos a favor.</h2>

	</c:when>


	<c:when test="${simulacion2.votos_favor > simulacion2.votos_contra}">

		<h2>Propuesta de ley aceptada</h2>

		
	</c:when>
	
		<c:when test="${simulacion2.votos_contra > simulacion2.votos_favor}">

		<h2>Propuesta de ley rechazada</h2>

		
	</c:when>
	</c:choose>