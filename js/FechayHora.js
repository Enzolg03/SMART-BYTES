fecha();
hora();
function fecha(){
    
    let d=(new Date()).getDate();
    let m=(new Date()).getMonth()+1;
    if(m<10) m="0"+m;

    let y=(new Date()).getFullYear();
    document.getElementById("blok2").innerText="Fecha:"+d+"/"+m+"/"+y;
}

function hora(){
    let h=(new Date()).getHours();
    if(h<10) h="0"+h;
    let mi=(new Date()).getMinutes();
    if(mi<10) mi="0"+mi;
    let s=(new Date()).getSeconds();
    if(s<10) s="0"+s;
    document.getElementById("blok1").innerHTML="Hora: "+h+":"+mi+":"+s;

    
    setTimeout("hora()",1000);
}