const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');

const adminRoutes = require('./routes/admin'); 
const shopRoutes = require('./routes/shop');

app.use(bodyparser.urlencoded({extended:false}));
app.use('/shop',shopRoutes);
app.use('/admin',adminRoutes);


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000); 
 
