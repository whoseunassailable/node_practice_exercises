const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rootDirectory = require('./utils/path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'page-not-found.html'));
})

app.listen(3000);