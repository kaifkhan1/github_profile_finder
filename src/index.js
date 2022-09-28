import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
// import express from 'express';
// import mongoose from 'mongoose';
// import ejs from "ejs";
// import bodyParser from "body-parser";

// // const express = require('express');
// // const mongoose = require('mongoose');
// // const ejs = require('ejs');
// // const bodyParser = require('body-parser');

// const app = express();

// app.set('view engine','ejs');
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static('public'));

// mongoose.connect('mongodb://localhost:27017/cardsDB',{useFindAndModify:true , useUnifiedTopology:true });

// const userSchema = mongoose.Schema({
//   dp:Image,
//   name:String,
//   phone:String,
//   address:String
// });

// const User = mongoose.model("User",userSchema);


  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );





