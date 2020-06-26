const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var log = function (entry) {
  fs.appendFileSync(
    '/tmp/sample-app.log',
    new Date().toISOString() + ' - ' + entry + '\n'
  );
};

app.use(bodyParser.text());

app.listen(port, () => {
  console.log('El servidor está inicializado en el puerto 3000');
});

app.post('/', function (req, res) {
  console.log(req.body);
  log('Received message: ' + req.body);
  res.send('Saludos desde express');
});
