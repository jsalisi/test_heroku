var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var hbs = require('hbs');

var port = process.env.PORT || 8080;

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs');
});

app.get('/login', (req, res) => {
    res.render('index.hbs');
});

app.post('/checkLogin', urlencodedParser, (req, res) => {
    console.log(req.body.uname, req.body.passwd);
    res.redirect('/login')
});

app.listen(port, () => {
    console.log(`server up on port ${port}`);
});