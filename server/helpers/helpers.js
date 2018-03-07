const db = require('../../db/models/review.js');

<<<<<<< HEAD
const addUsersToReviews = (reviews, startAt = 0) => {
  let userPromise;
  const userPromises = [];
  const slicedReviews = reviews.slice(Number(startAt), Number(startAt) + 20);
  for (let i = 0; i < slicedReviews.length; i += 1) {
    userPromise = db.retrieveData('users', { userId: slicedReviews[i].user.userId })
=======
const addUsersToReviews = (reviews) => {
  let userPromise;
  const userPromises = [];
  for (let i = 0; i < reviews.length; i += 1) {
    userPromise = db.retrieveData('users', { userId: reviews[i].user.userId })
>>>>>>> master
      .then(user => user[0])
      .catch(() => 'user not found');
    userPromises.push(userPromise);
  }
  return Promise.all(userPromises)
    .then((users) => {
<<<<<<< HEAD
      const updatedReviews = slicedReviews;
=======
      const updatedReviews = reviews;
>>>>>>> master
      for (let i = 0; i < users.length; i += 1) {
        updatedReviews[i].user = users[i];
      }
      return updatedReviews;
    });
};

<<<<<<< HEAD
const getQueryForSort = (sortBy = 'newest') => {
  const queries = {
    newest: { dateCreated: -1 },
    oldest: { dateCreated: 1 },
    highestRated: { businessRating: -1 },
    lowestRated: { businessRating: 1 },
  };
  return queries[sortBy];
};

module.exports.addUsersToReviews = addUsersToReviews;
module.exports.getQueryForSort = getQueryForSort;
=======
module.exports.addUsersToReviews = addUsersToReviews;
>>>>>>> master
