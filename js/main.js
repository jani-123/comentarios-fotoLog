/*aquí va tu código*/
function guardarDatos() 
{
    var nombre = document.getElementById("nombre").value;
    var comment = document.getElementById("comment").value;
    sessionStorage.setItem(nombre,comment);
    for (var i = 0; i < sessionStorage.length; i++) {
		var name = sessionStorage.key(i);
		var clave = sessionStorage.getItem(name);
		var divPrincipal = document.getElementById('addComentario');
		var divComentario = document.createElement('div');
  	        divComentario.setAttribute('class','divComentario');
  	    var name = document.createElement('label');
  	    var name1 = document.createTextNode(nombre);
  	    var comenta = document.createElement('label');
  	    var comenta1 = document.createTextNode(comment);
  	    comenta.appendChild(comenta1);
	    name.appendChild(name1);
	    divComentario.appendChild(name);
	    divComentario.appendChild(comenta);
	    divPrincipal.appendChild(divComentario);
	}
}
function clearData()
{
	document.getElementById("datos").innerHTML = 'limpiada vistas. Los datos permanecen.';
}
