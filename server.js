var express = require('express');

const PORT = 3000;

var fs = require('fs');
var path = require('path');

var app = express();
var index = fs.readFileSync(path.join(__dirname, 'build', 'index.html')).toString();

app.use('/css', express.static(path.join(__dirname, 'build', 'css')));
app.use('/images', express.static(path.join(__dirname, 'build', 'images')));
app.use('/fonts', express.static(path.join(__dirname, 'build', 'fonts')));
app.use('/app.js', express.static(path.join(__dirname, 'build', 'app.js')));

app.get('/', function (req, res) {
  res.send(index);
});

app.listen(PORT, function () {
  console.log('Listening on', PORT);
});
