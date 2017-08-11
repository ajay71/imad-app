var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {

 'a1': {
		tilte: 'article One | Ajay kumar Dubey',
		heading: 'article one',
		date: 'sep 5, 2017',
	
		content: `   <p>
                        This is the content for my first article. This is the content for my first article .
                        
                    </p>
                     <p>
                        This is the content for my first article. This is the content for my first article .
                        
                    </p>
                     <p>
                        This is the content for my first article. This is the content for my first article .
                        
                    </p>  `
    },
  'a2': {
        tilte: 'Article Two | Ajay kumar Dubey',
		heading: 'Article second',
		date: 'sep 10, 2017',
	
		content: `   <p>
                        This is the content for my Second Article. 
                     </p>  `
    },
  'a3': {
    	tilte: 'Article 03 | Ajay kumar Dubey',
		heading: 'Article third 03',
		date: 'sep 15, 2017',
	
		content: `   <p>
                        This is the content for my first article. This is the content for my first article .
                        
                    </p>
                     <p>
                        This is the content for my first article. This is the content for my first article .
                        
                    </p>
                     <p>
                        This is the content for my first article. This is the content for my first article .
                        
                    </p>  `
    },
    
};

function createTemplate (data) {
        
    var title = data.title;
    var date = data.date;
    
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
        
    <html>
        
        <head> 
        <link href="/ui/style.css" rel="stylesheet" />
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
                <div class="container">
                    <div>
                        <a href="/"> Home</a>
                    </div>
                    <hr/>
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
                    <hr/>
                </div>
                
        </body>
    </html> 
    `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articleName = a1
    //articles(articlename = () content object for article one)
    var articlename = req.params.articleName;
   res.send(createTemplate (articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
