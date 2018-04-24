const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const reviewRouter = require('./router/reviews.js');

const app = express();
app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../public'));

mongoose.connect(process.env.MONGOLAB_URI);

app.use(express.static(path.join(__dirname, '/../public')));

app.use('/biz', reviewRouter);

app.get('/', (req, res) => res.redirect('/biz/201'));

module.exports = app;
