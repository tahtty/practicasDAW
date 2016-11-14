cadena2="";

String.prototype.trim = function() { 
	return this.replace(/^\s+|\s+|\s+$/,"");
}

function esPalindromo(cadena2){
	cadena2=document.getElementById("ej2txt").value;
	var sinEsp="";
	var aux="";
	while((cadena2.search(/^\s+|\s+|\s+$/))!=-1){/*Devuelve -1 cuando no se halla coincidencia o la posición de la coincidencia*/
		cadena2=cadena2.trim();
	}
	sinEspYMin=cadena2.toLowerCase();
	for(i=sinEspYMin.length-1;i>=0;i--){
		aux=aux+sinEspYMin[i];
	}
	alert("Palabra volteada: "+aux);
	if(aux==sinEspYMin){
		alert("Es palíndromo");
	}
	else{
		alert("No es palíndromo");
	}
}