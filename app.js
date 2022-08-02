const express = require('express');
const app = express();
let i = 0;
let timeMin = 0;

app.get("/", (req, res) => {
	res.send(
	`<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Heroku tricks</title>
	</head>
	<body>
		<p>This page was open ${ i } times.</p>
		<p>Up-time is ${ timeMin } minutes.</p>
		<a href="reset"> RESET UP-TIME </a>
	  </body>
	</html>`
	);
	i++;
});

app.get("/reset", (req, res) => {
	res.send(
	`<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Heroku tricks</title>
	</head>
	<body>
		<p>Up-Time got reset after ${ timeMin } minutes.</p>
		<a href="/"> RETURN </a>
	  </body>
	</html>`
	);
	timeMin = 0;
});

app.listen(process.env.PORT || 3000);

// setTimeout(() => {i += 100;}, 10000);
setInterval(() => {timeMin ++;}, 60000);

