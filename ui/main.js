console.log('loaded');

//var img=document.getElementById('madi');

var marginleft=0;
function moveright()
{
    marginleft=marginleft+1;
    img.style.marginLeft=marginleft+'px';
}
img.onclick=function()
{
    var interval=setInterval(moveright,50);
};//
    