










var button=document.getElementById('counter');

button.onclick=function()
{
   var request=new XMLHttpRequest();


  request.onreadystatechange=function()
      {
        if (request.readyState==XMLHttpRequest.DONE)
        {
            if (request.status==200)
               {
                   var counter=request.responseText;
                   var span=document.getElementById('count');
                   span.InnerHTML=counter.tostring();
                   
               }
            
        }
    
    };
};

request.open('GET','http://lavanyakumareshbabu.imad.hasura-app.io/counter',true);
request.send(null);



