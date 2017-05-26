var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles = {
	'ArticleOneContent' : {
		title:"Article One By Harish", 
		heading:"Article One", 
		date:"25 May 2017", 
		Content:`The market witnessed short covering move after concerns over possible rate hike by the US Federal Reserve were abated which forced short-sellers to cover their positions.
	Latest FOMC minutes highlighted that policymakers at US Federal Reserve agreed that they should hold off on raising interest rates until it was clear that a recent US economic slowdown was temporary.`
	}, 
	'ArticleTwoContent' : {
		title:"Article Tow By Gireesh", 
		heading:"Article Two", 
		date:"26 May 2017", 
		Content:`Article Content
	Prepared by Gireesh`
	}, 
	'ArticleThreeContent' : {
		title:"Article One By Vinesh", 
		heading:"Article Three", 
		date:"27 May 2017", 
		Content:`Article Content
	Prepared by Vinesh`
	}
};

function createTemplate(data){
	var title = data.title;
	var heading=data.heading;
	var date = data.date;
	var content = data.Content;
	
	var html_template = `
	<html>
		<head>
			<title>
				${title}
			</title>
			<meta name="viewport" content="width=device-width, initial-scale=1"> 
			<link href="/ui/style.css" rel="stylesheet" />
		</head>
		<body>
			<div class = "Container">
				<div>
					<a href='/'>Home</a>
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
	</html>
	`
	
return html_template;
}


/*
app.get('/article-one', function(req, res) {
	//res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
	res.send(createTemplate(ArticleOneContent));
});

app.get('/article-two', function(req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
*/

app.get('/:In_ArticleName', function(req, res) {
	//var LocalArticleName = req.params.In_ArticleName;
	res.send(createTemplate(Articles[req.params.In_ArticleName]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
