const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(bodyParser.text());

app.listen(port, () => {
  console.log('El servidor está inicializado en el puerto 3000');
});

app.get('/', (req, res) => {
  res.json('Hola mundirijillo');
});

app.post('/hola', (req, res) => {
  console.log(req.body);

  res.send('Saludos desde express');
});
