const header = ["imgbaner/banneracce.jpg","imgbaner/bannergamer.jpg","imgbaner/bannercelu.png","imgbaner/bannerplay.png","imgbaner/banner3.jpg","imgbaner/banner4.jpg","img_laptops/laptop_banner.jpg","img_laptops/laptop_banner1.jpg",];

var colores=new Array("white","red","blue","yellow","purple","green","orange");


var c = 0;
function carrusel(){
    document.getElementById("imgcab").src = header[c];
    c++;
    if(c >= header.length) c= 0;
    setTimeout("carrusel()",1000);
}


var h=0;

function colorea(){
document.getElementById("h2cabo").style.color=colores[h];

    h++;
    if(h>=colores.length) h=0;
    setTimeout("colorea()",500);

}


document.body.setAttribute("onload","carrusel();colorea();")