




function worldclock() 
{
		var location1 = "Dublin, Ireland";
		var location2 = "Paris, France";
		var Location3 = "Moscow, Russia";
		var Location4 = "New Yourk, United States";

		

		    

		
		var dzisiaj = new Date();
			
		var weekday = new Array(7);

		    weekday[0] = "Sunday";
		    weekday[1] = "Monday";
		    weekday[2] = "Tuesday";
		    weekday[3] = "Wednesday";
		    weekday[4] = "Thursday";
		    weekday[5] = "Friday";
		    weekday[6] = "Saturday";

		var n = weekday[dzisiaj.getDay()];
		
		var dzien = dzisiaj.getDate();

		var month = new Array(12);
			month[0] = "January";
			month[1] = "February";
			month[2] = "March";
			month[3] = "Appril";
			month[4] = "May";
			month[5] = "June"; 
			month[6] = "July";
			month[7] = "August";
			month[8] = "September";
			month[9] = "October"; 
			month[10] = "November" ;
			month[11] = "December";

		var m = month[dzisiaj.getMonth()];

		var miesiac = dzisiaj.getMonth()+1;
		var rok = dzisiaj.getFullYear();

		var godzina = dzisiaj.getHours();
		if(godzina<10) godzina = "0"+godzina;
		var minuta = dzisiaj.getMinutes();
		if(minuta<10) minuta = "0"+minuta;
		var sekunda = dzisiaj.getSeconds();
		if(sekunda<10) sekunda = "0"+sekunda;
		// var milliseconds = dzisiaj.getMilliseconds();
		// if(milliseconds<10) milliseconds = "0"+milliseconds;

		document.getElementById("data").innerHTML =m + ", " + n + ", " + dzien; //+"/"+miesiac+"/"+rok
		document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda;
		// document.getElementById("millisecond").innerHTML = milliseconds;
		setTimeout("worldclock()",1);

		document.getElementById("time-location").innerHTML = "Time in " + location1 + " now: ";
		
}







	