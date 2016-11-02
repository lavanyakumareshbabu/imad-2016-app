var nameinput=document.getelementbyid('name');
var name=nameinput.value;
var submit=document.getelementbyid('submit-btn');
submit.onclick=function()
{
     var request=newXMLhttprequest();
     request.onreadystatechange=function()
     {
         if(request.readystate==XMLhttprequest.DONE)
         { 
             if (request.status==200)
             {
                 var names=request.responsetext;
                 names=JSON.parse(names);
                 var list='';
                 for(var i=0;i<names.length;i++)
                 {
                     list+='<li>'+names[i]+'<li>';
                 }
                 var ul=document.getelementbyid('namelist');
                 ul.innerHTML=list;
             }
         
         }
     };
};     