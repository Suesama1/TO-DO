var express = require('express');
var bodyParser = require('body-parser');

var app = new express();

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/login.html');
})

var urlencodedParser = bodyParser.urlencoded({ extended: false }) //解析地址

app.post('/log', urlencodedParser, function(req, res) {

    // 输出 JSON 格式
    var
        user = req.body.user,
        password = req.body.password;

    if (user == 'sue' && password == '123')
        res.sendFile(__dirname + '/index.html');
    else
        res.end('Username or Password is wrong!');
})

app.get('/out', function(req, res) {
    res.redirect('/');
})

app.listen(8888);