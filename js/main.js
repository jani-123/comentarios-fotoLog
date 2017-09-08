function guardarDatos() 
{
    localStorage.nombre = document.getElementById("nombre").value;
	localStorage.comment = document.getElementById('comment').value;
	if((localStorage.nombre != undefined) && (localStorage.comment != undefined)) 
	{

		var divPrincipal = document.getElementById('addComentario');
		var divComentario = document.createElement('div');
  	        divComentario.setAttribute('class','divComentario');
  	    var name = document.createElement('p');
  	    var name1 = document.createTextNode(nombre);
  	    var comenta = document.createElement('p');
  	    var comenta1 = document.createTextNode(comment);
  	    comenta.appendChild(comenta1);
	    name.appendChild(name1);
	    divComentario.appendChild(name);
	    divComentario.appendChild(comenta);
	    divPrincipal.appendChild(divComentario);
 	}
	else
	{
		document.getElementById('addComentario').innerHTML = "No has introducido tu nombre y tu password";
	}

}
function limpiar()
{
	document.getElementById("nombre").innerHTML = " ";
	document.getElementById("comment").innerHTML = " ";
}
