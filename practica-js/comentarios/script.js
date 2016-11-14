$(document).ready(function(){
	var btn = $(".comment-input button");
	btn.click(agregarComentario);
	var txtBox = $(".comment-input input");
	txtBox.keypress(function(event){
		if(event.keyCode === 13){
			agregarComentario();
		}
	});
});

function agregarComentario(){
	var txtInput = $(".comment-input input");
	console.log(txtInput.val());
	if(txtInput.val() === ""){
		return;
	}
	nuevoComentario = document.createElement("p");
	nuevoComentario.textContent = txtInput.val();
	sectionComments = $(".comments");
	sectionComments.append(nuevoComentario);
	txtInput.val("");
}