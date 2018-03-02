const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const reviewRouter = require('./router/reviews.js');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../public'));

mongoose.connect('mongodb://localhost/welp');

app.use(express.static(path.join(__dirname, '/../public')));

app.use('/biz', reviewRouter);

module.exports = app;
