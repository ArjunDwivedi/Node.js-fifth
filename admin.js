const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','addproduct.html'));
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop/second');
});

module.exports = router;
