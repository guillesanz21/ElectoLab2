<c:choose>
<c:when test="${UsuarioRegistrado == false }">

	<p> Muchas gracias por simular </p>

</c:when>


<c:when test="${UsuarioRegistrado == true }">

<p> Guarde su simulación aquí </p>

<form action="FormGuardaSimulacionServlet" >

        <input type="text" name="simName" />
        <button type="submit"> Guardar simulacion </button>
        
      
</form>
  
</c:when>
</c:choose>