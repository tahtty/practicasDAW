<%-- 
    Document   : home
    Created on : 09-ene-2017, 9:25:09
    Author     : Administrador
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <%
            String nombre="Marco";
            String apellido="Calderón";
        %>
        <%=nombre%>
        <%=apellido%>
        <%
            for (int i=0;i<10;i++){
        %>
                <p><%=i%></p>
        <%
            }
        %>
    </body>
</html>
