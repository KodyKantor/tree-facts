var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (request, response) {
  console.log('Received connection');
  response.send('Hello, Heroku');
});

app.listen(app.get('port'), function () {
  console.log('Waiting on port', app.get('port'));
});
