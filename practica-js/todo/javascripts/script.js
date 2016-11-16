var reciente=["Responder Tarea 5 | Hasta Nov 16 11:55pm","Responder Tarea 6 | Hasta Nov 21","Responder Segundo Avance de RL | Hasta Nov 21"]
var antiguo=["Taller 1 sobre RL | Hasta Nov 7 1:30pm","Taller Codigo de Etica Espol | Hasta Nov 9 11:30 am","TP 1.3 Capa de enlace | Hasta Nov 9 11:55pm"];

$(document).ready(function(){
	for(var i=0;i<reciente.length;i++){
		$(".content").append(reciente[i]+"<br><br>")
	}
	var t1=$(".tabs a");
	t1.click(function(event){
		cambiarTab(event.target);
	})
}
	);

function cambiarTab(c){
	var id=c.id;
	$("#"+id).addClass("active");
	console.log(id);
	if(id=="1"){
		$("#2").removeClass("active");
		$("#3").removeClass("active");
		agregarCont(id);
	}else
	if(id=="2"){
		$("#1").removeClass("active");
		$("#3").removeClass("active");
		agregarCont(id);
	}else
	if(id=="3"){
		$("#2").removeClass("active");
		$("#1").removeClass("active");
		agregarCont(id);
	}
}
function agregarCont(id){
	if(id=="1"){
		$(".content").empty();
		for(var i=0;i<reciente.length;i++){
		$(".content").append(reciente[i]+"<br><br>");
	}}else
	if(id=="2"){
		$(".content").empty();
		for(var i=0;i<antiguo.length;i++){
		$(".content").append(antiguo[i]+"<br><br>");
	}}else
	if(id=="3"){
		$(".content").empty();
		var cuadro=document.createElement("input");
		var btn=document.createElement("button");
		$(".content").append(cuadro);
		$(".content").append(btn);
		btn.click(agregarTarea);
		$(".content input").keypress(function(event){
		if(event.keyCode === 13){
			agregarTarea();
		}
	});
}}
function agregarTarea(){
	if($(".content input").val() === ""){
		return;
	}
	nuevaTarea = document.createElement("p");
	nuevaTarea.textContent = $(".content input").val();
	reciente.push(nuevaTarea.textContent);
	$(".content input").val("");
	aviso = document.createElement("p");
	aviso="Agregado a Recientes";
	$(".content").append("	"+aviso);
}