
	
	<c:choose>

	<c:when test="${emailUsuario == null }">

		<h3>Muchas gracias por simular</h3>

	</c:when>


	<c:when test="${emailUsuario != null }">

		<h3>Guarde su simulación aquí</h3>

		<form action="FormGuardaSimulacionServlet">
			<input type="text" name="simName" placeholder="nombre ley" />
			<button type="submit">Guardar simulacion</button>
		</form>

	</c:when>
</c:choose>