<c:choose>
	<c:when test="${emailUsuario == null }">

		<p>Muchas gracias por simular</p>

	</c:when>


	<c:when test="${emailUsuario != null }">

		<h3>Guarde su simulación aquí</h3>

		<form action="FormGuardaSimulacionServlet">
			<input type="text" name="simName" placeholder="nombre ley" />
			<button type="submit">Guardar simulacion</button>
		</form>

	</c:when>
</c:choose>