<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Simulaciones guardadas</title>
</head>
<body>
<h2>Simulaciones guardadas</h2>
<p><b>Número de simulaciones: </b>${fn:length(Simulaciones)}</p>

<h2>Simulaciones</h2>
<table border="1">
<c:forEach items="${Simulaciones}" var="simulacioni">
<tr>
<td>${simulacioni.id}</td>
<td>${simulacioni.titulo}</td>
<td><%@ include file = "FormVerSimulacionGuardada.jsp" %>
 </td>
</tr>
</c:forEach>
</table>
