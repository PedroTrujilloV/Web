<%@page contentType="text/html"%> 
<%@page pageEncoding="UTF-8"%>  
<html>    
	<HEAD>  
		<TITLE>Gracias por su atencion</TITLE>  
	</HEAD>  
	<BODY>  
		<% 
			String nombre=request.getParameter("nombre");
			int edad = Integer.parseInt(request.getParameter("edad"));   
			int anio = Integer.parseInt(request.getParameter("anio"));  
			String mayus = toUpperCase(nombre);
			String minus = toLowerCase(nombre);
			int tam = nombre.length;
			String[] numspl = anio.split("");
			int suma=0;
			for(int j=0;j<anio.length;j++)
			{
				suma+=Integer.parseInt(String[j]);
			} 
		%>    
		<p><u><b>Gracias por su opinión.</b></u></p>  
		<p style="margin-top: 0; margin-bottom: 0"><u>Estos son sus datos</u></p>  
		<p style="margin-top: 0; margin-bottom: 0">Nombre: <%=nombre%></p>  
		<p style="margin-top: 0; margin-bottom: 0">Edad: <%=edad%></p>
		<p style="margin-top: 0; margin-bottom: 0">Anio de Nacimiento: <%=anio%></p>   
        <p style="margin-top: 0; margin-bottom: 0">Mayusculas: <%=mayus%></p>
        <p style="margin-top: 0; margin-bottom: 0">Minusculas: <%=minus%></p>
        <p style="margin-top: 0; margin-bottom: 0">Tamanio: <%=tam%></p>
        <p style="margin-top: 0; margin-bottom: 0">Suma añio: <%=suma%></p>

	</BODY>    
</html>