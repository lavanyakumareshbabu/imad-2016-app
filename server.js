var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var Pool = require('pg').Pool;
var config={
       user:'lavanyakumareshbabu',
       database:'lavanyakumareshbabu',
       host:'db.imad.hasura-app.io',
       port:'5432',
       password:process.env.DB_PASSWORD
};
var articles ={
 'article-one' : 
{
    title:'article one by lavanya',
    heading:'article one',
    date:    'sep 5 2016',
    content: `this is article-onethis is article-onethis is article-one
             this is article-onethis is article-onethis is article-one
             this is article-onethis is article-onethis is article-one`
},
'article-two' :
{
    title:'article two by lavanya',
    heading:'article two',
    date:    'sep 10 2016',
    content: `this is article-twothis is article-onethis is article-one
             this is article-twoethis is article-onethis is article-one
             this is article-onethis is article-onethis is article-one`
},
'article-three' :
{
    title:'article three by lavanya',
    heading:'article three',
    date:    'sep 15 2016',
    content: `this is article-three this is article-onethis is article-one
             this is article-onethis is article-onethis is article-one
             this is article-onethis is article-onethis is article-one`
}
};
function createtemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmltemplate=
               `
               <html>
    <head>
        <title> ${title} </title>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport" content="width-device-width,initial-scale=1"/>
    </head>
    <body>
        <div>
         <a href='/'>Home</a>
        </div>
        <hr/>
        <h> ${heading}</h>
        <hr/>
        <hr/>
        <div>
            ${date}
        </div>
        <hr/>
        <div class = "center">
         <p1> 
              ${content}
        </p1>
        </div>
        
        
    </body>
</html>`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new Pool(config);
app.get('/test-db', function(req, res){
    pool.query('INSERT INTO test VALUES("lavanya")',function(err,result){
     if (err)
     {
         res.status(500).send(err.toString());
     }
     else
     {
         res.send(JSON.stringify(result.rows));
     }
    });
});
  

var c=0;
app.get('/counter', function (req, res) {
    c=c+1;
  res.send(c.toString());
}); 

var names=[];
app.get('/submit-name', function (req, res) {
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});





app.get('/:articlename', function (req, res) {
    var articlename=req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});

 
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
