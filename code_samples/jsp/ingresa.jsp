<%@ page language="java" import="java.sql.*"%>

<%



try { 

int codigo = Integer.parseInt(request.getParameter("code"));

String nomb = request.getParameter("userName");

float nota = Float.parseFloat(request.getParameter("note")); 

double nota=(double)nota;

Class.forName("org.postgresql.Driver").newInstance(); 

Connection conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/dbformulario", "admin", "pedro"); 

Statement stmt = conn.createStatement(); 

stmt.executeUpdate("insert into estudiantes values ('"+nomb+"',"+codigo+","+nota+")"); 



out.println(codigo); 

} 

catch (NumberFormatException e) {  out.println("You didn't enter right values - The error was: "+e);

}   









		

%>


			
		
		
