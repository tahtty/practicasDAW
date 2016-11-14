var array=[];

function impAmstrongs(){
	var start=100;
	var i;
	var a;
	var b;
	var c;
	var j=0;
	for(i=start;i<=999;i++){
		a=~~(i/100);
		b=~~((i-(a*100))/10);
		c=i%10;
		if((Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3))==i){
			array.push(i);
			j++;
		}
	}
	document.getElementById('amstrongslist').innerHTML=array+" ";
}