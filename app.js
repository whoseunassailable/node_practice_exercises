const { error } = require('console');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;
const filePath = './html/index.html'

app.get('/', (req, res, next) => {
    console.log('First middleware');
    next();
});

app.get('/', (req, res, next) => {
    console.log('Second middleware');
    res.send('<h1>Hi! This is Rohan');
})

const server = app.listen(port, () => {
    console.log('Server started at port : ' + server.address().port);
});