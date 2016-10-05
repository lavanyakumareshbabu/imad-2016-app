console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = "NEW VALUE";
var img=document.getElementById("madi");

var marginleft=0;

function moveright(){ marginleft=marginleft+2; img.style.marginLeft=marginleft+"px";}

img.onclick=function(){ var interval = setInterval(moveright,10);};
