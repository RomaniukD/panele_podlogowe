function oblicz(){
  var laminowane= document.getElementById("laminowane").checked;
  var winylowe= document.getElementById("winylowe").checked;
  var deska= document.getElementById("deska").checked;

  var szerokosc= document.getElementById("szerokosc").value;
  var dlugosc= document.getElementById("dlugosc").value;

  var pole = szerokosc * dlugosc;
  console.log(pole)
if (laminowane){
  var cena = pole*12;
}
else if (winylowe){
  var cena = pole*14;
}
else if (deska){
  var cena = pole*18;
}

  document.getElementById("wynik").innerHTML= "Pole pomieszczenia:"+pole+"    "+"Cena za panele:"+cena;
}
