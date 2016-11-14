$(document).ready(function(){
	var btn = document.querySelector(".comment-input button");
	btn.addEventListener("click",agregarComentario);
	var txtBox = document.querySelector(".comment-input input");
	txtBox.addEventListener("keypress",function(event){
		if(event.keyCode === 13){
			agregarComentario();
		}
	});
});

function agregarComentario(){
	var txtInput = document.querySelector(".comment-input input");
	console.log(txtInput.value);
	if(txtInput.vale === ""){
		return;
	}
	nuevoComentario = document.createElement("p");
	nuevoComentario.textContent = txtInput.value;
	sectionComments = document.querySelector(".comments");
	sectionComments.appendChild(nuevoComentario);
	txtInput.value = "";
}