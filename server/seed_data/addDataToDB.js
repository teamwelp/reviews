const mockData = require('./data_generator.js');
const mongoose = require('mongoose');
const helper = require('./helper.js');

mongoose.connect('mongodb://localhost/welp');

helper.insertDataToDB('users', mockData.userData)
  .then(() => console.log('complete'))
  .catch((error) => { throw error; });

helper.insertDataToDB('businesses', mockData.businessData)
  .then(() => console.log('complete'))
  .catch((error) => { throw error; });

helper.insertDataToDB('reviews', mockData.reviews)
  .then(() => {
    mongoose.disconnect();
    console.log('complete');
  })
  .catch((error) => { throw error; });
