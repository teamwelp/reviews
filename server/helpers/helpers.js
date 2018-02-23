const db = require('../../db/models/db.js');

const addUsersToReviews = (reviews) => {
  let userPromise;
  const userPromises = [];
  for (let i = 0; i < reviews.length; i += 1) {
    userPromise = db.retrieveData('users', { userId: reviews[i].user.userId }).then(user => user[0]);
    userPromises.push(userPromise);
  }
  return Promise.all(userPromises).then((users) => {
    const updatedReviews = reviews;
    for (let i = 0; i < users.length; i += 1) {
      updatedReviews[i].user = users[i];
    }
    return updatedReviews;
  });
};

module.exports.addUsersToReviews = addUsersToReviews;
