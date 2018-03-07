const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const reviewRouter = require('./router/reviews.js');

const app = express();
<<<<<<< HEAD
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../public'));
=======
>>>>>>> master

mongoose.connect('mongodb://localhost/welp');

app.use(express.static(path.join(__dirname, '/../public')));

<<<<<<< HEAD
app.use('/biz', reviewRouter);
=======
app.use('/businesses', reviewRouter);
>>>>>>> master

module.exports = app;
