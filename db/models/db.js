const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  business_id: Number,
  user_id: Number,
  business_rating: Number,
  date_created: Date,
  text: String,
  image: String,
  review_rating: {
    useful: Number,
    funny: Number,
    cool: Number,
  },
});

const userSchema = mongoose.Schema({
  user_id: Number,
  username: String,
  image: String,
  friends: Number,
  reviews: Number,
  photos: Number,
});

const ReviewModel = mongoose.model('Review', reviewSchema);
const UserModel = mongoose.model('User', userSchema);

const models = {
  reviews: ReviewModel,
  users: UserModel,
};

// Database Methods
const insertData = (dbModel, data) => new models[dbModel](data).save();

const retrieveData = dbModel => models[dbModel].find().exec();

module.exports.insertData = insertData;
module.exports.retrieveData = retrieveData;
