window.onload=function (){
	var oDiv_zong=document.getElementById('ball-cube');
	var oDiv=oDiv_zong.getElementsByTagName('div');
	function aa() {
		var array=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
		var color="";
		for (var i=0;i<6;i++) {
			var n=Math.ceil(Math.random()*15);
			color+=array[n];
			// console.log(color)
			 if (i==5) {
		    	return "#"+color;
		    }
		}
	}

	// 	function cc() {
	// 	var array2=[0,1,2,3,4,5,6,7,8,9];
	// 	var color2="";
	// 	for (var i=0;i<3;i++) {
	// 		var n=Math.ceil(Math.random()*9);
	// 		color2+=array2[n];
	// 		console.log(color2)
	// 		 if (i==2) {
	// 	    	return ""+color2;
	// 	    }
	// 	}
	// }

	


	function bb() {

		// var xx=Math.floor(Math.random()*255);

		for(var i=0;i<oDiv.length;i++) {
			oDiv[i].style.borderColor=aa();
			// oDiv[i].style.backgroundColor="rgb("+cc()+", "+cc()+", "+cc()+")";

			// oDiv[i].style.backgroundColor="rgb("+xx+", "+xx+", "+xx+")";
			
			// oDiv[i].style.opacity=Math.random();
		}

	}

	var timer1=null;
	timer1=setInterval(bb,100);
} 



