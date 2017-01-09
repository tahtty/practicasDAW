<<<<<<< HEAD
function cargarDato(r){
	var claseDiv="col-lg-3 col-md-4 col-xs-6 thumb";
	var ca="thumbnail";
	var ci="img-responsive";
	r.items.forEach(function(item) {
		im=item.media.m;
		console.log(im);
		var div = document.createElement("div");
		var a=document.createElement("a");
		var img=document.createElement("img");
		$(div).addClass(claseDiv);
		$(a).addClass(ca);
		$(a).attr("href","#");
		$(img).addClass(ci);
		$(img).attr("src",im);
		$(a).append(img);
		$(div).append(a);
		$(".container .row").append(div);
	});
}

function buscar(hashtag) {
var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&";

$.getJSON(url,{tags: hashtag ,format:"json"} ,function(resp) {
crear(resp);
});
}

$(document).ready(function(){
=======
function borrarDatos(){
	$(".eliminar").remove();
}

$("#inputTags +button").click(function(e) {
	borrarDatos();
	var inp=$("#inputTags").val();
	console.log(inp);
	buscar(inp);
});

function agregarDatos(r){
	var cD="col-lg-3 col-md-4 col-xs-6 thumb";
	var ca="thumbnail";
	var ci="img-responsive";
	var d=document.createElement("div");
	$(d).addClass("eliminar");
	$(".container .row").append(d);
	for (var i = 0; i < r.items.length; i++) {
		url = r.items[i].media.m;
		console.log("tags: "+r.items[i].tags+"\n");
		var div=document.createElement("div");
		var a=document.createElement("a");
		var img=document.createElement("img");
		$(div).addClass(cD);
		$(a).addClass(ca);
		$(img).addClass(ci);
		$(a).attr("href","#");
		$(img).attr("src",url);
		$(".container .row .eliminar").append($(div).append($(a).append(img)));
	}

}

function buscar(tag){
	var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
	$.getJSON(url, {tags: tag, format:"json"}, function(r) {
	  agregarDatos(r);
	});
	
}

$(document).ready(function() {
>>>>>>> 93feb4982528d1bb04b5c0ebb2b127b76e2edc5e
	buscar("Espol");
});