var  GMToffset = 0,t;

function start() {
  GMToffset=zxcReadCookie('time')||0;
  t=setInterval('digitalclock()',500);
}
var today=new Date();
function digitalclock()
{



var today=new Date();
var hours=(today.getHours() + GMToffset*1+24)%24;
var minutes=today.getMinutes();
var seconds=today.getSeconds();
minutes=checkTime(minutes);
seconds=checkTime(seconds);
hours=checkTime(hours);





    document.getElementById('zegar').innerHTML=hours+":"+minutes+":"+seconds;
    
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}

function updatetime(nu) {
  GMToffset = nu;
  zxcCreateCookie('time',nu,1); // change 1 to the number of days persistance required
}

function zxcCreateCookie(nme,v,days){
 document.cookie=nme+'='+v+';expires='+(new Date(new Date().getTime()+days*86400000).toGMTString())+';path=/';
}

function zxcReadCookie(nme){
 nme+='=';
 var split = document.cookie.split(';');
 for(var z0=0;z0<split.length;z0++){
  var s=split[z0];
  while (s.charAt(0)==' ') s=s.substring(1,s.length);
  if (s.indexOf(nme)==0) return s.substring(nme.length,s.length);
 }
 return null;
}




var weekday = new Array(7);

        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    var n = weekday[today.getDay()];

    var data = today.getDate();

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

    var m = month[today.getMonth()];

    
    var rok = today.getFullYear();
    document.getElementById("data").innerHTML =data +"  "+m + ", " +  rok; //+"/"+miesiac+"/"+rok