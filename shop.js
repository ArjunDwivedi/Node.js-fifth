const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/second', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
});

module.exports = router;    