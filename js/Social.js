
function rotar(e){
    e.setAttribute("style","width:200px;transform: rotateX(360deg);transition: all 1s ease");
}

function normale(e){
    e.setAttribute("style","width:200px;");
}



function aumentar(e){
    e.setAttribute("style","width:50% ;padding: 0px;opacity: 1;transition: all 1s");
}

function disminuir(e){
    e.setAttribute("style","width:50%; margin:10px;opacity: 0.5;border-radius: 20px;transition: all 1s;padding: 10px");
    
}

function pintar(e){
    e.setAttribute("style","background-color: red;");
}

function despintar(e){ 
    e.setAttribute("style","background-color: rgb(33,97,140);");
}



function animar(e){
    e.setAttribute("style","padding:0%; width:65px; height:65px; opacity:1; transition:all 1s",);
}

function normal(e){

    e.setAttribute("style","padding:10px; width:65px; height:65px; opacity:0.5; transition: all 1s");
}

for(let i=0; i<document.getElementsByClassName("redes").length;i++){
    document.getElementsByClassName("redes")[i].setAttribute("onmouseover","animar(this)");
    document.getElementsByClassName("redes")[i].setAttribute("onmouseout","normal(this)");
}
for(let i=0; i<document.getElementsByClassName("barra").length;i++){
    document.getElementsByClassName("barra")[i].setAttribute("onmouseover","pintar(this)");
    document.getElementsByClassName("barra")[i].setAttribute("onmouseout","despintar(this)");
}

for(let i=0; i<document.getElementsByClassName("recla").length;i++){
    document.getElementsByClassName("recla")[i].setAttribute("onmouseover","aumentar(this)");
    document.getElementsByClassName("recla")[i].setAttribute("onmouseout","disminuir(this)");
}

for(let i=0; i<document.getElementsByClassName("logo").length;i++){
    document.getElementsByClassName("logo")[i].setAttribute("onmouseover","rotar(this)");
    document.getElementsByClassName("logo")[i].setAttribute("onmouseout","normale(this)");
}

