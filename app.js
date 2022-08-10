const express = require('express');
const app = express();
const fs = require('fs');
var i = 2;
var timeMin = 0;

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
	
	fs.readFile('./mydata.txt', (err, data) => {
		if(err) var dataString = err;
		else var dataString = data.toString();
		dataString += `${ i++ / 2 } - ${ req.ip }<br/>`;
		dataString += '\n';
		fs.writeFile('./mydata.txt', dataString, ()=>{});
	
		res.send(
		`<!DOCTYPE html>
		<html lang="en">
		<head>
			<title>Heroku tricks</title>
			<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
			<link rel="stylesheet" href="./style.css">
		</head>
		<body>
			<div class="container mt-5 bg-info">
				<h3>This page was open ${ i++ } times.</hh3>
				<h4>Up-time is ${ timeMin } minutes.</h4>
				<p>String data:<br/> ${ dataString }</p>
				<a href="reset"> RESET UP-TIME... </a>
			</div>
		  </body>
		</html>`
		);
	});
});

app.listen(process.env.PORT || 3000);


