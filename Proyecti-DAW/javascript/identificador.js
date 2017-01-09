$(document).ready(function() {
	id=identificador();
	console.log(id);
	links(id);

});


function identificador() {
	var url = document.location.href;
	var est = /\?estudiante/;
	var prof = /\?profesor/;
	if (est.test(url)){
		return "est";
	}
	if(prof.test(url)){
		return "prof";
	}
	else{
		return "pub";
	}
}


function links(tipo) {
	 var param =""
	if(tipo=="est"){
		param= "?estudiante"
	}

	if(tipo=="prof"){
		param ="?profesor"
	}
	var li = $(".row.nav.nav-tabs").children()
	
	for (var i = 0; i < li.length; i++) {
		lin = $(li[i]).children()
		a= lin[0]
		
		if($(a).html()=="Inicio"){
				$(a).attr('href', 'index.html'+param);	
		}
		if($(a).html()=="El Curso"){
			$(a).attr('href', 'curso.html'+param);	
		}
		if($(a).html()=="Semana a semana"){
			$(a).attr('href', 'semana.html'+param);	
		}
		if($(a).html()=="Equipo"){
			$(a).attr('href', 'index.html'+param);	
		}
		if($(a).html()=="Ayudantías"){
			$(a).attr('href', 'ayudantia.html'+param);	
		}
	}
}