var myArray=["Carlos","Made","José","Iván","Carlos","Made","José","Carlos","Made"];
var cadena;
var num;
var i = 0;

function verificaVeces(myArray,cadena,num){
	cadena=document.getElementById('ej1txt').value;
	num=document.getElementById('ej1num').value;
	nume=parseInt(num);
	var cont=0;
	document.getElementById('array').innerHTML="Arreglo original: "+myArray;
	for(i = 0; i < myArray.length ; i++){
		if(myArray[i]==cadena){
			cont++
		}
	}
	if(cont==nume){
		alert("True, sí aparece las "+num+" veces antes escritas");
	}
	else{
		alert("False, no aparece las "+num+" veces antes escritas, aparece "+cont+" veces");
	}
	return;
}