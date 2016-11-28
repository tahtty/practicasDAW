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

function buscar(){
	var url="http://api.flickr.com/services/feeds/photos_public.gne?tags=espol&format=json&jsoncallback=?";
	$.getJSON(url, function(resp){
		/*console.log(resp);*/
		cargarDato(resp);
	});
}

$(document).ready(function(){
	buscar();
});