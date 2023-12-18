
function marco(e){
    e.setAttribute("style","width: 30%;border-radius: 5px; background-color:purple;border: 3px solid cyan;")
}

function sinmarco(e){
    e.setAttribute("style","width: 30%; margin: 10px; border: 3px solid white;")
}

for(let i=0; i<document.getElementsByClassName("imga").length;i++){
    document.getElementsByClassName("imga")[i].setAttribute("onmouseover","marco(this)");
    document.getElementsByClassName("imga")[i].setAttribute("onmouseout","sinmarco(this)");
    }