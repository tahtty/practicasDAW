$(document).ready(function() {
	if(jQuery.browser.mobile){

		$("#menu .nav.nav-tabs.col-lg-11 li").remove();
		$("div.btn.btn-defualt.dropdown-toggle").width(10);
		var btn=document.createElement("button");
		$(btn).addClass('btn');
		$(btn).addClass('btn-primary');
		$(btn).addClass('dropdown-toggle');
		$(btn).attr("data-toggle","dropdown");
		$(btn).attr("aria-haspopup", "true");
		$(btn).attr("aria-expanded", "false");
		var immenu=document.createElement("img");
		$(immenu).attr("src","images/menu.JPG");
		$(btn).append(immenu);
		$("#menu").prepend(btn);
		$("#menu ul.nav.nav-tabs.col-lg-11").addClass('dropdown-menu');
		var li1=document.createElement("li");
		var li2=document.createElement("li");
		var li3=document.createElement("li");
		var li4=document.createElement("li");
		var li5=document.createElement("li");
		$(li1).addClass('col-xs-11');
		var a1=document.createElement("a");
		$(a1).attr("href","#");
		$(a1).html("Inicio");
		$(li1).append(a1);
		$(li2).addClass('col-xs-11');
		var a2=document.createElement("a");
		$(a2).attr("href","#");
		$(a2).html("El Cuso");
		$(li2).append(a2);
		$(li3).addClass('col-xs-11');
		var a3=document.createElement("a");
		$(a3).attr("href","#");
		$(a3).html("Semana a semana");
		$(li3).append(a3);
		$(li4).addClass('col-xs-11');
		var a4=document.createElement("a");
		$(a4).attr("href","#");
		$(a4).html("Equipo");
		$(li4).append(a4);
		$(li5).addClass('col-xs-11');
		var a5=document.createElement("a");
		$(a5).html("Ayudantías");
		$(a5).attr("href","#");
		$(li1).id="primario";
		$(li1).addClass('active');
		$("#menu ul.nav.nav-tabs.col-lg-11").append(li1);
		$("#menu ul.nav.nav-tabs.col-lg-11").append(li2);
		$("#menu ul.nav.nav-tabs.col-lg-11").append(li3);
		$("#menu ul.nav.nav-tabs.col-lg-11").append(li4);
		$("#menu ul.nav.nav-tabs.col-lg-11").append(li5);
	}

	$('#exampleModal').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) 
		  var recipient = button.data('whatever') 

		  var modal = $(this)
		  modal.find('.modal-header p').val(recipient)

		});
	var id=identificador();
	console.log(id);
	links(id,getParameterByName(name));
	cambios();
});
	//$("#ingresoButton").on("click", validacion)

function validacion(){
	var tipo = $("#p").val()
	var url = "data/data.json"
	var xhttp = new XMLHttpRequest();
	console.log("hola 1");
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState ==4 && xhttp.status == 200){
			var json = JSON.parse(xhttp.responseText) ;
			console.log(json);
			var correo = $("#recipient-name").val();
			var password = $("#recipient-password").val();

			if ((correo=="")||(password=="")){
				alert("No ha llenado los campos")
			}else{
				var contador = 0
				for (i = 0; i<json.length ; i++){
					console.log("estudiante")
					contador= contador+1;
					var correoJson = json[i].email
					var passwordJson = json[i].password
					var tipoJson = json[i].type
					var nombre=json[i].name;

					if ( (correoJson==correo) && (passwordJson!=password)){
						alert("contraseña incorrecta!!")
						break;
					}else if((correoJson==correo) && (passwordJson==password) && (tipoJson!=tipo)){
						alert("usted no es un " + tipo)
						break;
					}else if((correoJson==correo) && (passwordJson==password) && (tipoJson==tipo)){
						window.location="http://localhost/Proyecto-Daw/index.html?" + tipoJson+"&name="+nombre;
						var id=identificador();
						links(id,getParameterByName("name"));
						cambios();
						console.log("hola");
						break;
					}
				}
				if (contador>= json.length) {
					alert("usuario no existente");
				}
				
			}
		}


	}

	xhttp.open("GET", url);
	xhttp.send();
	return;
}

function cambios(){
	var tipo=identificador();
	var docu=identArchivo();
	switch (docu) {
		case 'index':{
			agregarIndex(tipo);
			break;}
		case 'curso':{
			agregarCurso(tipo);
			break;}
		default:{
			return;
			break;}
	}
}



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
	return;
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
	return;
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
	return;
}}

function cambios(){
	var tipo=identificador();
	var docu=identArchivo();
	switch (docu) {
		case 'index':{
			agregarIndex(tipo);
			break;}
		case 'curso':{
			agregarCurso(tipo);
			break;}
		default:{
			return;
			break;}
	}
	return;
}

function agregarIndex(t){
	if (t=="prof") {
		$("button.btn.btn-default.dropdown-toggle").css("visibility","visible");
		$("nav#loggeo").remove();
	}
	if (t=="est") {
		$("button.btn.btn-default.dropdown-toggle").css("visibility","visible");
		$("#menu div.col-lg-1 div.col-lg-12.col-xs-10 ul.dropdown-menu.col-xs-1:lastChild()").remove();
		$("nav#loggeo").remove();
		//.remove();
	}
	else {
		return;
	}
}

function agregarCurso(t){
	if (t=="prof") {
		$("button.btn.btn-default.dropdown-toggle").css("visibility","visible");
	}
	if (t=="est") {
		$("button.btn.btn-default.dropdown-toggle").css("visibility","visible");
		$("#menu div.col-lg-1 div.col-lg-12.col-xs-10 ul.dropdown-menu.col-xs-1:nth-child()").remove();
	}
	else {
		return;
	}
	return;
}

function quitar(){
	$("button.btn.btn-default.dropdown-toggle").css("visibility","hidden");
}

(function(a) {
(jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);