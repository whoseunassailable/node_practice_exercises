const express = require('express');

const app = express();

app.use('/', (request, response, next) => {
    console.log('Initial page');
    next();
});

app.use('/welcome',(request, response, next ) => {
    response.send('<h1>A warm welcome from Rohan</h1>');
}) ;

app.use((request, response, next ) => {
    console.log('Final Page');
}) ;

app.listen(8000)
