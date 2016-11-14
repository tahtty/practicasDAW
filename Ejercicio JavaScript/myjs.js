var name="Tahís Ahtty";
var myArray=["Carlos","Made","José","Iván"];

window.onload=function(e){
	console.log(name);
	console.log(myArray);
}

function mostrar(){
	console.log(name);
	console.log(myArray);
}

function añadir(){
	var nombre=document.getElementById('txt').value;
	/*console.log(nombre);*/
	if (nombre==''){
		alert('No se puede ingresar un campo vacío');
	}else{
		myArray.push(nombre);
	}
	document.getElementById('txt').value='';
}