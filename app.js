var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Eat a Bag of apples!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
