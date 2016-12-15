var movieTitle = new Array();

movieTitle[0] = "The Godfather";
movieTitle[1] = "Schindler's List";
movieTitle[2] = "12 Angry Men";
movieTitle[3] = "Life Is Beautiful";
movieTitle[4] = "The Shawshank Redemption";
movieTitle[5] = "The Pursuit of Happyness";
movieTitle[6] = "Seven Samurai";
movieTitle[7] = "Requiem for a Dream";
movieTitle[8] = "A Beautiful Mind";
movieTitle[9] = "Hachi: A Dog's Tale";
movieTitle[10] = "The Dark Knight";
movieTitle[11] = "It's a Wonderful Life";
movieTitle[12] = "Phone Booth";
movieTitle[13] = "The Sixth Sense";
movieTitle[14] = "Saving Private Ryan";
movieTitle[15] = "The Bridge on the River Kwai";
movieTitle[16] = "The Secret in Their Eyes";
movieTitle[17] = "Gran Torino";
movieTitle[18] = "Inglourious Basterds";
movieTitle[19] = "Blood Diamond";
movieTitle[20] = "Man on Fire";
movieTitle[21] = "Raiders of the Lost Ark";
movieTitle[22] = "Once Upon A Time In The West";
movieTitle[23] = "Goodfellas";
movieTitle[24] = "Lord of the Rings Fellowship of the Ring";
movieTitle[25] = "Seven Samurai";
movieTitle[26] = "Inception";
movieTitle[27] = "Fight Club";
movieTitle[28] = "One Flew Over The Cuckoos Nest";
movieTitle[29] = "The Dark Knight";
movieTitle[30] = "The Star Wars Rogue One";


var randomMovie = Math.floor(Math.random() * movieTitle.length);
var randomMovieTitle = movieTitle[randomMovie];

var haslo = randomMovieTitle;
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "B";
litery[2] = "C";
litery[3] = "D";
litery[4] = "E";
litery[5] = "F";
litery[6] = "G";
litery[7] = "H";
litery[8] = "I";
litery[9] = "J";
litery[10] = "K";
litery[11] = "L";
litery[12] = "M";
litery[13] = "N";
litery[14] = "O";
litery[15] = "P";
litery[16] = "Q";
litery[17] = "R";
litery[18] = "S";

litery[19] = "T";
litery[20] = "U";
litery[21] = "V";
litery[22] = "W";
litery[23] = "X";
litery[24] = "Y";
litery[25] = "Z";





function start()
{
	
	var tresc_diva ="";
	
	for (i=0; i<=25; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr]) 
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_haslo();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//skucha
		ile_skuch++;
		var obraz = "images/hangman/s"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if (haslo == haslo1)
	document.getElementById("alfabet").innerHTML  = "Thas Right !! Congratulations: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">One More Time ?</span>';
	
	//przegrana
	if (ile_skuch>=9)
	document.getElementById("alfabet").innerHTML  = "You Loose !, Corect Answer Was "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">One More Time ?</span>';
}
