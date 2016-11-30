var k = "AIzaSyAmhPSTltQAMTXS_pN-lTZsiV5D-W4GaqU";
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
	  	tops(artista)


	});

}
function tops(artista) {
	ur = "https://api.spotify.com/v1/artists/"+artista.id+"/top-tracks?country=EC"
	$.getJSON(ur, function(resp) {
			
			canciones  =[];
			for (var i = 0; i < 5 ;i++) {
				canciones.push(resp.tracks[i].name);
			}
			getyoutube(artista,canciones);

	});
}

function getyoutube(artista,canciones) {
	link = "https://www.googleapis.com/youtube/v3/search"
	query =[]
	for (var i = canciones.length - 1; i >= 0; i--) {
		busqueda = artista.nombre+" "+canciones[i];
		query.push(busqueda);
	}
	videos =[]
	for (var i = query.length - 1; i >= 0; i--) {
		$.getJSON(link, {jsoncallback: '?',key: k ,q: query[i] ,part:"snippet",type: "video"}, function(res) {
			console.log(res)
	});
	}
	
}

$(document).ready(function() {
	obtenerArtista("ColdPlay")
	
});