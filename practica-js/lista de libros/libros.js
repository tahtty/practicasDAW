var libros = [
{titulo: 'The Design of EveryDay Things',
imagen: 'http://ecx.images-amazon.com/images/I/41j2ODGkJDL._AA115_.jpg',
autor: 'Don Norman',
leido: false
},
{titulo: 'The Most Human Human',
imagen: 'http://ecx.images‐amazon.com/images/I/41Z56GwEv9L._AA115_.jpg',
autor: 'Brian Christian',
leido: true
}];
$(document).ready(agregar());
function agregar(){
	for (var i = 0; i <= libros.length - 1; i++) {
		nuevoLibro = document.createElement("li");
		nuevoLibro.textContent = libros[i].titulo+"	"+libros[i].autor;
		var img=document.createElement("img");
		img.src = libros[i].imagen;
		img.alt=libros[i].titulo;
		nuevoLibro.append(img);
		sectionBooks = $("#misLibros");
		sectionBooks.append(nuevoLibro);
		if(libros[i].leido===true){
			nuevoLibro.style.color="gray";
		}
	}
}