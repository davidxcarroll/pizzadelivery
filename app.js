var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/', function (req, res) {
	res.render('index', {
		title: "Pizza Delivery",
		message: "Charles has a licking problem."
	});
});

app.listen(3000, function() {
	console.log("listening on 3000");
});