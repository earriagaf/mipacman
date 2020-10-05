var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

var data = [];
var root = path.resolve(__dirname) + '/public/';
app.get('/', (req, res) => {
  //res.sendFile('block.html', { 'root': root });
  res.sendFile('index.html', { 'root': root });
    console.log('get(/)');
});
app.get('/set', function(req, res) {
    console.log('get(/set)');
    console.log(JSON.stringify(req.query));
    data.push({ x: req.query.x });
    res.send({
        x: req.query.x
    });
});
app.get('/get', function(req, res) {
    console.log('get(/get)');
    res.send(JSON.stringify(data));
});
app.get('/pac', function(req, res) {
    console.log('get(/pac) /PacMan' + req.query.id + '.png');
    res.sendFile('/PacMan' + req.query.id + '.png', { 'root': root });
});

app.listen(3001);
console.log("Running on port 3001");
