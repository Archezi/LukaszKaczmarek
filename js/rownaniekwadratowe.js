function solution(){
  
  var a = document.getElementById('a').value ;
  var b = document.getElementById('b').value ;
  var c = document.getElementById('c').value ;
  var delta ;  
  
  var x1 ;
  var x2 ;
  
  delta = Math.pow(b, 2) - (4*a*c)
  if (delta < 0) {
    alert("Delta negative lack of solutions" )
  }
  else if (delta == 0) {
    
    x1 = -b/ (2*a)
    alert("delta equel zero --- one solution" + x1)
    
  }
  else (delta > 0) 
    delta = Math.sqrt(delta);
    x1 = (-b -delta)/(2*a);
    x2 = (-b + delta) / (2*a);
    alert ("Delta positive -- two solutions: x1 = " + x1 + "x2 = " +x2);
  
  
  
  
}

function clearance() {
  
  document.getElementById('a').value = 0
  document.getElementById('b').value = 0
  document.getElementById('c').value = 0
  
}