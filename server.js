const express = require('express');
const app = express();
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=33810&id=524901&APPID=18408c043cb329f8ecfffd0558165a04&units=imperial';
const testUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=Orlando,us&id=524901&APPID=18408c043cb329f8ecfffd0558165a04&mode=json'
const port = 3000;

const myHeaders = ('Cache-Control', 'public, max-age=700');

const headers = {
    method: 'GET',
    headers: myHeaders,
};

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
	fetch(newUrl)
	.then(res => res.json())
	.then(data => res.render('pages/index'))
	.catch(err => {
		console.log(err);
		res.sendStatus(500);
	});

});


app.use('/public', express.static('public'));

app.listen(port);
console.log('Magic is churning on ' + port);


