const express = require('express');
const ejs = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));



app.listen(3000,function(){
    console.log('Server Started');
})