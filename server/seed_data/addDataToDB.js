const mockData = require('./data_generator.js');
const mongoose = require('mongoose');
const db = require('./../../db/models/db.js');

mongoose.connect('mongodb://localhost/welp');

const insertDataToDB = (dbModel, data) => {
  const promises = [];

  for (let i = 0; i < data.length; i += 1) {
    promises.push(db.insertData(dbModel, data[i]));
  }

  Promise.all(promises).then(() => console.log('complete'));
};

insertDataToDB('users', mockData.userData);
insertDataToDB('reviews', mockData.reviews);
