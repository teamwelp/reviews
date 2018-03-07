const fs = require('file-system');
const businesses = require('./data.js').businesses;
const users = require('./data.js').users;
const faker = require('faker');
const path = require('path');

const userData = [];

for (let i = 0; i < users.length; i += 1) {
  userData.push({
    userId: users[i].id,
    username: users[i].name,
<<<<<<< HEAD
    image: faker.image.avatar(),
    friends: faker.random.number({ max: 100 }),
    reviews: faker.random.number({ max: 100 }),
    photos: faker.random.number({ max: 100 }),
    location: faker.fake('{{address.city}}, {{address.stateAbbr}}'),
=======
    image: 'http://lorempixel.com/400/200/people',
    friends: faker.random.number({ max: 100 }),
    reviews: faker.random.number({ max: 100 }),
    photos: faker.random.number({ max: 100 }),
>>>>>>> master
  });
}

const reviews = [];

for (let i = 0; i < businesses.length; i += 1) {
  for (let j = 0; j < 200; j += 1) {
    reviews.push({
      reviewId: businesses[i].id + 100 + j,
      businessId: businesses[i].id,
      user: {
        userId: userData[Math.floor(Math.random() * 100)].userId,
      },
      businessRating: Math.floor(Math.random() * 5) + 1,
      dateCreated: faker.date.past(),
<<<<<<< HEAD
      text: faker.lorem.paragraphs(),
      images: Array(Math.floor(Math.random() * 5)).fill(null).map(() => faker.image.food()),
=======
      text: faker.lorem.sentences(),
      image: 'http://lorempixel.com/400/200/food',
>>>>>>> master
      reviewRating: {
        useful: faker.random.number({
          min: 2,
          max: 1000,
        }),
        funny: faker.random.number({
          min: 2,
          max: 1000,
        }),
        cool: faker.random.number({
          min: 2,
          max: 1000,
        }),
      },
    });
  }
}

<<<<<<< HEAD
const businessData = [];

for (let i = 0; i < businesses.length; i += 1) {
  businessData.push({
    businessId: businesses[i].id,
    businessName: businesses[i].name,
  });
}

module.exports.userData = userData;
module.exports.reviews = reviews;
module.exports.businessData = businessData;
=======
module.exports.userData = userData;
module.exports.reviews = reviews;
>>>>>>> master

// fs.writeFile(path.join(__dirname, '/mock_users.json'), JSON.stringify(userData, null, 4), () => {
//   console.log('completed');
// });

// fs.writeFile(path.join(__dirname, '/mock_reviews.json'), JSON.stringify(reviews, null, 4), () => {
//   console.log('completed');
// });
