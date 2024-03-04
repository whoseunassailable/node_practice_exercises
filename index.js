var express = require('express');
var app = express();

const port = 3000;

var fs = require('fs');
var users = [];

fs.readFile('users.json', { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err;

    const jsonData = JSON.parse(data);
    jsonData.people.forEach(user => {
        users.push(user);
    });
});

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', (req, res) => {
    res.render('index', {users: user});
    // var buffer = '';

    // users.forEach((user) => {
    //     buffer += '<a href="/' + user.first_name + '">' + user.last_name + '</a><br>';
    // });

    // res.send(buffer);
});

app.get('/:first_name', (req, res) => {
    res.send('The username is ' + req.params.first_name);
});

var server = app.listen(port, () => {
    console.log('Server running at : ' + server.address().port);
});
