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
	link = "https://www.googleapis.com/youtube/v3/search";
	query =[];
	for (var i = canciones.length - 1; i >= 0; i--) {
		busqueda = artista.nombre+" "+canciones[i];
		query.push(busqueda);
	}
	videos =[]
	for (var i = 0; i <= canciones-1; i++) {
		$.getJSON(link, {jsoncallback: '?',key: k ,q: query[i] ,part:"snippet",type: "video"}, function(res) {
			console.log("anterior");
			console.log(videos);
			videos.push(res);
			console.log("despues");
			console.log(videos);
	});
	}
	console.log("terminado");
	console.log(videos);
	/*llenar(videos,artista);*/
}

function llenar(r,a){
	$("#imagen").attr("src",a.portada.url);
	$("#informacion h2").html(a.nombre);
	$("#informacion a").attr("href",a.spotify);
	$("#informacion p").html(a.seguidores+" seguidores");
	console.log(r.length);
	for (var i = 1; i <=r.length; i++) {
		var vlink="https://www.youtube.com/embed/"+r[i-1].items[0].id.videoId;
		console.log(vlink);
		var iframe=document.createElement("iframe");
		$(iframe).attr("width","400");
		$(iframe).attr("height","300");
		$(iframe).attr("src",vlink);
		console.log(r[i].items[0].snippet.thumbnails.title);
		$("#p"+i+" panel .panel-default .panel-footer p").html(r[i].items[0].snippet.thumbnails.title);
		$("#p"+i+" panel .panel-default .panel-body").append(iframe);
	}
	
}

$(document).ready(function() {
	/*$("#inputTags +button").click(function(e) {
	var inp=$("#input").val();
	console.log(inp);
	obtenerArtista(inp);
});*/
	obtenerArtista("ColdPlay");
});