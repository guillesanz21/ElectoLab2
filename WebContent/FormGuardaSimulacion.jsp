<c:choose>
<c:when test="${usuario == null }">

	<p> Muchas gracias por simular </p>

</c:when>


<c:when test="${usuario != null }">

<p> Guarde su simulación aquí </p>

<form action="FormGuardaSimulacionServlet" >

        <input type="text" name="simName" placeholder="nombre ley"/>
        <button type="submit"> Guardar simulacion </button>
        
      
</form>
  
</c:when>
</c:choose>