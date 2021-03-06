var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var counter=0;
app.get('/counter', function (req, res) {
    counter=counter + 1;
  res.send(counter.toString());
});

var articles= {
 'article-one':{
    
    title:'Article One',
    heading:' Article One',
    date:'feb 22',
    content:` <p>
        First Paragraph.
        
    </p>
    
     <p>
       2nd Paragraph.
        
    </p>
    
     <p>
        3rd Paragraph.
        
    </p>`
},
'article-two':{
    
    title:'Article Two',
    heading:' Article Two',
    date:'feb 22',
    content:` <p>
        First Paragraph.
        
    </p>
    
     <p>
       2nd Paragraph.
        
    </p>
    
     <p>
        3rd Paragraph.
        
    </p>`
},
'article-three':{
    
    title:'Article Three',
    heading:' Article Three',
    date:'feb 22',
    content:` <p>
        First Paragraph.
        
    </p>
    
     <p>
       2nd Paragraph.
        
    </p>
    
     <p>
        3rd Paragraph.
        
    </p>`
}
};

function createTemplate (data) {
    
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmlTemplate = `<html>
    
    <head>
        
        <title>
            
            ${title}
        </title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
        
    </head>

<body>
    <div class="container">
        
    <div>
        
        <a href="/"> Home</a>
    </div>
    <hr/>
    
    <h3>
        ${heading}
        
    </h3>
    
    <div>
       ${date}
        
    </div>
    
    <div>
    
    ${content}
    
    </div>
</div>

</body>
</html>`;

return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names = [];
app.get('/submit-name', function (req, res) {// /:name is replaced by submit-name?name=xxxx 
 //get the name from the request
 
 var name = req.query.name;//'params' is replaced by 'query'
 
 names.push(name);
 
 //JSON
 res.send(JSON.stringify(names));
});

app.get('/:articleName', function(req,res){
    
    //articleName == articles;
    //articles[articleName] == {} content object for article one
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
