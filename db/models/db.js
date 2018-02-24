const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const reviewSchema = mongoose.Schema({
  businessId: Number,
  user: {
    userId: Number,
  },
  businessRating: Number,
  dateCreated: Date,
  text: String,
  image: String,
  reviewRating: {
    useful: Number,
    funny: Number,
    cool: Number,
  },
});

const userSchema = mongoose.Schema({
  userId: { type: Number, unique: true },
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

const retrieveData = (dbModel, query) => models[dbModel].find(query).lean().exec();

module.exports.insertData = insertData;
module.exports.retrieveData = retrieveData;
module.exports.models = models;
