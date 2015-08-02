/* El objetivo es crear la clase objetoAjax 
(en Javascript a las �clases� se les llama �prototipos�) 
no hay palabra reservada class se usan function
*/


/*necesitamos un objeto XMLHttpRequest que cogeremos del constructor para
que sea compatible con la mayor�a de navegadores posible. */
function objetoAjax( )
{this.objetoRequest = new ConstructorXMLHttpRequest();}


//Funci�n asignada al m�todo coger del objetoAjax.
function peticionAsincrona(url) 
{
/*Copiamos el objeto actual, si usa this dentro de la funci�n que asignemos
a onreadystatechange, no funciona.*/
var objetoActual = this; //copia
this.objetoRequest.open('GET', url, true); //Preparamos la conexi�n.

/*Aqu� no solo le asignamos el nombre de la funci�n, sino la funci�n completa, as� cada vez que
se cree un nuevo objetoAjax se asignara una nueva funci�n. */

this.objetoRequest.onreadystatechange = function() {
switch(objetoActual.objetoRequest.readyState)
{
case 1: //Funci�n que se llama cuando se est� cargando.
objetoActual.cargando();
break;
case 2: //Funci�n que se llama cuando se a cargado.
objetoActual.cargado();
break;
case 3: //Funci�n que se llama cuando se est� en interactivo.
objetoActual.interactivo();
break;
case 4:
/*Funci�n que se llama cuando se completo la transmisi�n, se le env�an 4
par�metros.*/
objetoActual.completado(objetoActual.objetoRequest.status,
objetoActual.objetoRequest.statusText,
objetoActual.objetoRequest.responseText,
objetoActual.objetoRequest.responseXML);
break;
} //switch
}
this.objetoRequest.send(null); //Iniciamos la transmisi�n de datos.
}


/*Las funciones en blanco se redefinen seg�n necesidad
haci�ndolas muy sencillas o complejas dentro de la p�gina o omitiendolas.*/

function objetoRequestCargando() {}
function objetoRequestCargado() {}
function objetoRequestInteractivo() {}
function objetoRequestCompletado(estado, estadoTexto, respuestaTexto, respuestaXML) {}

/* Las funciones que hemos creado, pertenecen al ObjetoAJAX, con prototype,
de esta manera todos los objetoAjax que se creen, lo har�n conteniendo estas funciones en ellos*/


//Definimos la funci�n de recoger informaci�n.
objetoAjax.prototype.coger = peticionAsincrona ;
//Definimos una serie de funciones que ser�a posible utilizar y las dejamos en blanco en esta clase.
objetoAjax.prototype.cargando = objetoRequestCargando ;
objetoAjax.prototype.cargado = objetoRequestCargado ;
objetoAjax.prototype.interactivo = objetoRequestInteractivo ;
objetoAjax.prototype.completado = objetoRequestCompletado ;