const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const reviewRouter = require('./router/reviews.js');

const app = express();

mongoose.connect('mongodb://localhost/welp');

app.use(express.static(path.join(__dirname, '/../public')));

app.use('/businesses', reviewRouter);

module.exports = app;
