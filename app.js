var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!' + 
      '<br>This message sent with node.js using express'+
        'purple mokey dishwasher');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
