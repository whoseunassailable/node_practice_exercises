const express = require('express');
const nightRoute = require('./routes/night');
const dayRoute = require('./routes/sunset');
const path = require('path');
const rootDirectory = require('./utils/path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/night', nightRoute);
app.use('/day', dayRoute);

app.use((req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'html', 'page-not-found.html'));
});

app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
});