function guardarDatos() 
{
    var nombre = document.getElementById("nombre").value;
	var comment = document.getElementById('comment').value;
	localStorage.setItem(nombre,comment);

	for (var i=0 ; i< localStorage.length ; i++) 
	{
		var clave=localStorage.key(i);
		var value=localStorage.getItem(clave);
		// var divPrincipal = document.getElementById('addComentario');
		$("#addComentario").append('<div><p>'+clave+'</p><p>'+value+'</p></div>')
		// var divComentario = document.createElement('div');
  // 	        divComentario.setAttribute('class','divComentario');
  // 	    var name = document.createElement('p');
  // 	    var name1 = document.createTextNode(clave);
  // 	    var comenta = document.createElement('p');
  // 	    var comenta1 = document.createTextNode(value);
  // 	    comenta.appendChild(comenta1);
	 //    name.appendChild(name1);
	 //    divComentario.appendChild(name);
	 //    divComentario.appendChild(comenta);
	 //    divPrincipal.appendChild(divComentario);

	}

}
function limpiar()
{
	localStorage.clear();// limpia
	$("#addComentario").empty();

	
}
