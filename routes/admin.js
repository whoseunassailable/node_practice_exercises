const express = require('express');
const path = require('path');
const rootDirectory = require('../utils/path');

const router = express.Router();

// admin /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
});

// /admin/add-product => POST 
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop/');
})

module.exports = router;