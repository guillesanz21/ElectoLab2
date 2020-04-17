<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h2>Admin</h2>
<p><b>Número de UsuariosRegistrados: </b>${fn:length(UsuariosRegistrados)}</p>

<h2>Usuarios</h2>
<table border="1">
<c:forEach items="${UsuariosRegistrados}" var="usuarioi">
<tr>
<td>${usuarioi.nombre}</td>
<td>${usuarioi.email}</td>
</tr>
</c:forEach>
</table>

<h2>Reset</h2>
<%@ include file = "FormSeedBBDD.jsp" %>

<%@ include file = "FormRegistro.jsp" %>

<h2>Salir de la aplicación</h2>
<%@ include file = "FormLogout.jsp" %>

</body>
</html>