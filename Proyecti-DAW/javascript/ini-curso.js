$(document).ready(function() {
	id=identificador();
	console.log(id);
	links(id,"");
	cambios();
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

function identArchivo(){
	var url = document.location.href;
	var ind = /index.html/;
	var curs = /curso.html/;
	if (ind.test(url)){
		return "index";
	}
	if(curs.test(url)){
		return "curso";
	}
}


function links(tipo,u) {
	 var param =""
	if(tipo=="est"){
		param= "?estudiante"+"="+u;
	}

	if(tipo=="prof"){
		param ="?profesor"+"="+u;
	}
	else{
		param="";
	}
	var li = $("#menu ul.nav.nav-tabs.col-lg-11").children();
	console.log(li);
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
	var lis=$("#menu .col-lg-1 .dropdown-menu.col-xs-1").children();
	console.log(lis);
	for (var i = 0; i < li.length; i++) {
		lin = $(li[i]).children();
		a= lin[0];
		if($(a).html()=="Perfil"){
				$(a).attr('href', 'Perfil.html'+param);	
		}
		if($(a).html()=="SANDBOX"){
			$(a).attr('href', 'sandbox.html'+param);	
		}
		if($(a).html()=="Proyectos"){
			$(a).attr('href', 'proyectos.html'+param);	
		}
}