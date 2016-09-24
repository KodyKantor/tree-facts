var express = require('express');
var pug = require('pug');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'pug'); // using default views directory './views'

app.get('/', function(request, response) {
  console.log('Received connection');
  response.render('main');
});

app.post('/submit', function(request, response) {
  var fact = request.body.fact;
  console.log('Received fact: Trees:', fact);
  response.render('main');
});

app.listen(app.get('port'), function() {
  console.log('Waiting on port', app.get('port'));
});
