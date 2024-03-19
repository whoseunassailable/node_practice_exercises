const express = require('express');
const path = require('path');
const rootDirectory = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
});

module.exports = router;