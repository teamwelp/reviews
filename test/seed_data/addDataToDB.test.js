const helper = require('../../server/seed_data/helper.js');
const mongoose = require('mongoose');
const db = require('../../db/models/db.js');

describe('test insertDataToDB method (integration test)', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/welp');
    await mongoose.connection.dropDatabase();
  });

  afterAll( async () => {
    await mongoose.disconnect();
    // await db.connection.close();
  });

  test('insertDaToDB method should insert user data to welp database', async () => {
    const testUserData = [{
      userId: 2000,
      username: 'hello',
      image: 'world',
      friends: 100,
      reviews: 200,
      photos: 300,
    }];

    await helper.insertDataToDB('users', testUserData).then();

    await db.retrieveData('users', { userId: testUserData[0].userId }).then((data) => {
        expect(data[0].userId).toBe(testUserData[0].userId);
        expect(data[0].username).toBe(testUserData[0].username);
        expect(data[0].image).toBe(testUserData[0].image);
        expect(data[0].friends).toBe(testUserData[0].friends);
        expect(data[0].reviews).toBe(testUserData[0].reviews);
        expect(data[0].photos).toBe(testUserData[0].photos);
    });
  });

  test('insertDaToDB method should insert review data to welp database', async () => {
    const testDate = new Date();

    const testReviewData = [{
      businessId: 3000,
      user: {
        userId: 200,
      },
      businessRating: 4,
      dateCreated: testDate,
      text: 'hello world',
      image: 'image',
      reviewRating: {
        useful: 300,
        funny: 400,
        cool: 500,
      },
    }];

    await helper.insertDataToDB('reviews', testReviewData).then();

    await db.retrieveData('reviews', { businessId: testReviewData[0].businessId }).then((data) => {
      expect(data[0].businessId).toBe(testReviewData[0].businessId);
      expect(data[0].user.userId).toBe(testReviewData[0].user.userId);
      expect(data[0].businessRating).toBe(testReviewData[0].businessRating);
      expect(data[0].dateCreated).toEqual(testReviewData[0].dateCreated);
      expect(data[0].text).toBe(testReviewData[0].text);
      expect(data[0].image).toBe(testReviewData[0].image);
      expect(data[0].reviewRating.useful).toBe(testReviewData[0].reviewRating.useful);
      expect(data[0].reviewRating.funny).toBe(testReviewData[0].reviewRating.funny);
      expect(data[0].reviewRating.cool).toBe(testReviewData[0].reviewRating.cool);
    });
  });
});

