var colores=new Array("white","red","blue","yellow","purple","green","orange");

var h=0;

function colorear(){

document.getElementById("h2cab").style.color=colores[h];

    h++;
    if(h>=colores.length) h=0;
    setTimeout("colorear()",500);

}



document.body.setAttribute("onload","colorear();")