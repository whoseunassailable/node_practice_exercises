var express = require('express');
var app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Amateur developer : Rohan Bhande');
});

app.get('/yo', (req, res) => {
    res.send('hola hijos de puta');
});

var server = app.listen(port, () => {
    console.log('Server running at : ' + server.address().port);
});
