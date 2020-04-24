<c:choose>
<c:when test="${simulacion.ley_aprobada != true }">

		<h2>Propuesta de ley rechazada</h2>

	</c:when>


	<c:when test="${simulacion.ley_aprobada == true  }">

		<h2>Propuesta de ley aceptada</h2>

		
	</c:when>
	</c:choose>