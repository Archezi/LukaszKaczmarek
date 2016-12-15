// zmienna globalna powodujaca losowy wybor grafiki
var numer = Math.floor(Math.random()*5)+1;

var timer1 = 0;
var timer2 = 0;

function ustawslajd(nrslajdu) {

	clearTimeout(timer1);
	clearTimeout(timer2);
	numer = nrslajdu-1;

	schowaj();
	setTimeout("zmienslajd()",500);

}

function schowaj() {
	$("#slider").fadeOut(500);
}

function zmienslajd() {
	numer++; if(numer>5)numer=1;
	
	var plik = "<img src=\"images/slidy/slide"+numer+".jpg\"/>";

	document.getElementById("slider").innerHTML = plik;
	// pojawianie sie slidu w plynny sposob za pomoca biblioteki jQuary
	$("#slider").fadeIn(500);
	$()
	//ustawia zmiane slajdu co 5 sekund
	timer1 = setTimeout("zmienslajd()",5000);
	//ustawia zanikanie slajdu po uplywie 4,5 sekundy
	timer2 = setTimeout("schowaj()",4500);
}