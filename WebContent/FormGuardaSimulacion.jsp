
	
	<c:choose>

	<c:when test="${emailUsuario == null }">

		<h3>Muchas gracias por simular</h3>

	</c:when>


	<c:when test="${emailUsuario != null }">

		<h3>Guarde su simulación aquí</h3>

		<form action="FormGuardaSimulacionServlet">
			<input type="text" name="simName" placeholder="nombre ley" />
			<input type="hidden" name="TipoMayoria" id="TipoMayoria" value="" />
			<input type="hidden" name="LeyAprobada" id="LeyAprobada" value="" />
			<button type="submit" class="btn btn-success">Guardar simulacion</button>
		</form>

	</c:when>
</c:choose>