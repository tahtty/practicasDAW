
function obtenerArtista(nombre) {
	var url = "https://api.spotify.com/v1/search"
	$.getJSON(url, {q: nombre, type:"artist", jsoncallback:"?"}, function(r) {
	  	elemento = r.artists.items[0];
	  	var artista ={}
	  	artista.nombre = elemento.name;
	  	artista.portada = elemento.images[0]; // la portada es un objeto con los atributos (height,width,url)
	  	artista.seguidores = elemento.followers.total;
	  	artista.generos = elemento.genres;
	  	artista.id =elemento.id;
	  	artista.spotify = elemento.external_urls.spotify; //Link para escuchar en Spotify
	  	console.log(artista)
	  	tops(artista.id)


	});

}
function tops(idartista) {
	ur = "https://api.spotify.com/v1/artists/"+idartista+"/top-tracks?country=EC"
	$.getJSON(ur, function(resp) {
			
			canciones  =[];
			for (var i = 0; i < 5 ;i++) {
				canciones.push(resp.tracks[i].name);
			}

			console.log(canciones);
	});
}


$(document).ready(function() {
	obtenerArtista("ColdPlay")
	
});