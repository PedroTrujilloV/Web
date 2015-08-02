<%@ page contentType="text/html; charset=iso-8859-1" language="java" 
 import="java.sql.*" errorPage="" %>
 <%@ page import="java.net.*" %>
 <%@ page import="java.util.*" %>
 <%@ page import="java.io.*" %>
 <%@ page import="javax.sql.*" %>
 <%@ page import="java.sql.*" %>
 <%@ page import="javax.naming.*" %>
  
 <%
 try
 {
 try {
 Class.forName("org.postgresql.Driver");
 } catch (ClassNotFoundException e) {
 out.println("<h1>No se encontro el Driver: " + e.getMessage() + "</h1>" 
 );
 }
 String driver = "org.postgresql.Driver";
 String connectString = "jdbc:postgresql://127.0.0.1/dbformulario";
 String user = "admin";
 String password = "pedro";
   Class.forName(driver).newInstance();
 Connection conn = DriverManager.getConnection(connectString, user, 
 password);
   ResultSet rs = conn.createStatement().executeQuery("select * from 
 formulario");
   out.println("El número de columnas obtenido es " + rs.getMetaData
 ().getColumnCount());
   //Imprime el nombre de la primera columna de la tabla
 String cName = rs.getMetaData().getColumnLabel(1);
 out.println("El nombre de la primera columna es " + cName + "<br><br>");
   //Se imprime el valor de la primera columna de cada fila
 while(rs.next()){
 Object o=rs.getObject(cName);
 out.println(cName+" "+o+"<br>");
 }
 }
 catch (Exception e)
 {
 out.print("Excepcion : " + e.getMessage() + "\n");
 }
 %>
