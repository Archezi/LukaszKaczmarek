 window.onload = start;

//setting array with 64 elements
var fild = new Array(64);
// setting number in every single box
for ( i = 0; i < fild.length; i++) {
	fild[i] = i + 1;
}
 

function start()
{
	//we define a box content in every single div, 
	
	var tresc_diva = "";
	//
	for ( i = 0; i <=63; i++) 
	{
    var element = "boxFild" + i;
		tresc_diva = tresc_diva +'<div class="box" onclick="check('+i+')" id="'+element+'">'+fild[i]+'</div>';
		// ( (i+1) % 8 == 0) jest to dzielenie bez reszty zeby 
		if ((i+1) % 8 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	document.getElementById("board").innerHTML = tresc_diva;
}


//RANDOM LOCATION


 var  randomLoc = fild[Math.floor(Math.random() * i)];


 var  location1 = randomLoc;
 var  location2 = location1 + 1;
 var  location3 = location2 + 1;

 var  randomLoc2 = fild[Math.floor(Math.random() * i)];


 var  location4 = randomLoc2;
 var  location5 = location4 + 1;
 var  location6 = location5 + 1;
 var  location7 = location6 + 1;

function check(nr) {
    
    var  hit = false;
    
    for( i=0; i<fild.length; i++) {
        if ( fild[nr] == location1 || fild[nr] == location2 || fild[nr] == location3 || fild[nr] == location4|| fild[nr] == location5 || fild[nr] == location6 || fild[nr] == location7) 
          hit = true;  
    }
  if (hit == true)
     {
       var element = "boxFild" + nr;
       document.getElementById(element).style.background = "#003300";
 		document.getElementById(element).style.color = "#00C000";
 		document.getElementById(element).style.border = "1px solid #00C000";
 		document.getElementById(element).style.cursor = "default";
     }
   else 
     {
       var element = "boxFild" + nr;
 		document.getElementById(element).style.background = "#330000";
 		document.getElementById(element).style.color = "#C00000";
 		document.getElementById(element).style.border = "1px solid #C00000";
 		document.getElementById(element).style.cursor = "default";	
 		document.getElementById(element).setAttribute("onclick",";");
     }
}

