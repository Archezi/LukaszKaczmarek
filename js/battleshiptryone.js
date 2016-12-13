 window.onload = start;

//setting array with 64 elements
var fild = new Array(64);
// setting number in every single box
for (var i = 0; i < fild.length; i++) {
	fild[i] = i + 1;
}
 


//FUNCTION THAT DEFINVE LEYOUT OF OUR FUNCTION

function start()
{
	//we define a box content in every single div, musimy przygotowac styl do diva
	//zeby zaprojektowac jak wyglada box
	var tresc_diva = "";
	//
	for (var i = 0; i <=63; i++) 
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

// var  randomLoc = fild[Math.floor(Math.random() * i)];



 var  location1 = randomLoc;
 var  location2 = location1 + 1;
 var  location3 = location2 + 1;

function check(fild, randomLoc) {
    
    var  hit = false;
    
    for(var i=0; i<fild.length; i++) {
        if ( fild[i] == location1 || fild[i] == location2 || fild[i] == location3) 
          hit = true;
    }
  if (hit == true)
     {
       var element = "boxFild" + nr;
       document.getElementById("element").style.background = "#003300";
 		document.getElementById("element").style.color = "#00C000";
 		document.getElementById("element").style.border = "1px solid #00C000";
 		document.getElementById("element").style.cursor = "default";
     }
   else
     {
       var element = "boxFild" + nr;
 		document.getElementById("element").style.background = "#330000";
 		document.getElementById("element").style.color = "#C00000";
 		document.getElementById("element").style.border = "1px solid #C00000";
 		document.getElementById("element").style.cursor = "default";	
 		document.getElementById("element").setAttribute("onclick",";");
     }
}

// function check(nr)
// {
//   var  hit = false;
//   // alert(nr)
//    for (i=0; i < fild; i++) 
//    {
//      if ( fild[i] == location1 )
//      {
       
//        hit = true;
//      }
//    }
//   if (hit == true)
//     {
//       var element = "boxFild" + nr;
//       document.getElementById(element).style.background = "#003300";
// 		document.getElementById(element).style.color = "#00C000";
// 		document.getElementById(element).style.border = "1px solid #00C000";
// 		document.getElementById(element).style.cursor = "default";
//     }
//   else
//     {
//       var element = "boxFild" + nr;
// 		document.getElementById(element).style.background = "#330000";
// 		document.getElementById(element).style.color = "#C00000";
// 		document.getElementById(element).style.border = "1px solid #C00000";
// 		document.getElementById(element).style.cursor = "default";	
// 		document.getElementById(element).setAttribute("onclick",";");
//     }
// }