const express = require('express');
const mongoose = require('mongoose');
const db = require('../db/models/db.js');
const path = require('path');
const reviewRouter = require('./router/reviews.js');

const app = express();

mongoose.connect('mongodb://localhost/welp');

app.use(express.static(path.join(__dirname, '/../public/index.html')));

app.use('/', reviewRouter);

app.listen(8000, () => {
  console.log('listening to port 8000');
});
