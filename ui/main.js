console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = "NEW VALUE";
var img=document.getElementById("madi");
var marginleft = 0;
function moveright(){
    marginleft=marginleft+2;
    img.style.marginleft=marginleft+"px";
}
img.onclick=function(){
    var interval=Setinterval(moveright,50);};
   // img.style.marginLeft="100px";};
