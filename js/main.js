function guardarDatos() 
{
    localStorage.nombre = document.getElementById("nombre").value;
	localStorage.comment = document.getElementById('comment').value;
	for (var clave in localStorage) {
		var divPrincipal = document.getElementById('addComentario');
		var divComentario = document.createElement('div');
  	        divComentario.setAttribute('class','divComentario');
  	    var name = document.createElement('p');
  	    var name1 = document.createTextNode(localStorage.nombre);
  	    var comenta = document.createElement('p');
  	    var comenta1 = document.createTextNode(localStorage.comment);
  	    var valor = localStorage[clave];
  	    comenta.appendChild(valor);
	    name.appendChild(name1);
	    divComentario.appendChild(name);
	    divComentario.appendChild(comenta);
	    divPrincipal.appendChild(divComentario);

	}

}
function limpiar()
{
	document.getElementById("datos").innerHTML = " ";
	
}
