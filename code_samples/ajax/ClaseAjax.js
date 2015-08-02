/* El objetivo es crear la clase objetoAjax 
(en Javascript a las “clases” se les llama “prototipos”) 
no hay palabra reservada class se usan function
*/


/*necesitamos un objeto XMLHttpRequest que cogeremos del constructor para
que sea compatible con la mayoría de navegadores posible. */
function objetoAjax( )
{this.objetoRequest = new ConstructorXMLHttpRequest();}


//Función asignada al método coger del objetoAjax.
function peticionAsincrona(url) 
{
/*Copiamos el objeto actual, si usa this dentro de la función que asignemos
a onreadystatechange, no funciona.*/
var objetoActual = this; //copia
this.objetoRequest.open('GET', url, true); //Preparamos la conexión.

/*Aquí no solo le asignamos el nombre de la función, sino la función completa, así cada vez que
se cree un nuevo objetoAjax se asignara una nueva función. */

this.objetoRequest.onreadystatechange = function() {
switch(objetoActual.objetoRequest.readyState)
{
case 1: //Función que se llama cuando se está cargando.
objetoActual.cargando();
break;
case 2: //Función que se llama cuando se a cargado.
objetoActual.cargado();
break;
case 3: //Función que se llama cuando se está en interactivo.
objetoActual.interactivo();
break;
case 4:
/*Función que se llama cuando se completo la transmisión, se le envían 4
parámetros.*/
objetoActual.completado(objetoActual.objetoRequest.status,
objetoActual.objetoRequest.statusText,
objetoActual.objetoRequest.responseText,
objetoActual.objetoRequest.responseXML);
break;
} //switch
}
this.objetoRequest.send(null); //Iniciamos la transmisión de datos.
}


/*Las funciones en blanco se redefinen según necesidad
haciéndolas muy sencillas o complejas dentro de la página o omitiendolas.*/

function objetoRequestCargando() {}
function objetoRequestCargado() {}
function objetoRequestInteractivo() {}
function objetoRequestCompletado(estado, estadoTexto, respuestaTexto, respuestaXML) {}

/* Las funciones que hemos creado, pertenecen al ObjetoAJAX, con prototype,
de esta manera todos los objetoAjax que se creen, lo harán conteniendo estas funciones en ellos*/


//Definimos la función de recoger información.
objetoAjax.prototype.coger = peticionAsincrona ;
//Definimos una serie de funciones que sería posible utilizar y las dejamos en blanco en esta clase.
objetoAjax.prototype.cargando = objetoRequestCargando ;
objetoAjax.prototype.cargado = objetoRequestCargado ;
objetoAjax.prototype.interactivo = objetoRequestInteractivo ;
objetoAjax.prototype.completado = objetoRequestCompletado ;