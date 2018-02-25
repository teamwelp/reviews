const helpers = require('../../server/helpers/helpers.js');
const request = require('supertest');
const app = require('../../server/server.js');
const mongoose = require('mongoose');
const db = require('../../db/models/review.js');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost/welp');
});

afterAll( async () => {
  await mongoose.disconnect();
});

describe('test root route', () => {
  let response;

  beforeAll(async () => {
    response = await request(app).get('/');
  });

  test('it should respond when a GET request is sent to root route', async () => {
    expect(response.statusCode).toBe(200);
  });

  test('root should serve index.html', async () => {
    expect(response.text).toMatch(/html/);
  });
});

describe('test reviews route', () => {
  let response;

  beforeAll(async () => {
    response = await request(app).get('/businesses/200/reviews');
  });

  test('it should return business reviews from database', async () => {
    const dbData = await db.models.reviews.find({ businessId: 200 }).exec();

    expect(JSON.parse(response.text)[0].businessId).toBe(dbData[0].businessId);
    expect(JSON.parse(response.text)[0].length).toBe(dbData[0].length);
    expect(JSON.parse(response.text)[0]).toHaveProperty('user');
    expect(JSON.parse(response.text)[0]).toHaveProperty('businessRating');
    expect(JSON.parse(response.text)[0]).toHaveProperty('dateCreated');
    expect(JSON.parse(response.text)[0]).toHaveProperty('text');
    expect(JSON.parse(response.text)[0]).toHaveProperty('image');
    expect(JSON.parse(response.text)[0]).toHaveProperty('reviewRating');
  });

  test('it should combine reviews with user data', async () => {
    expect(JSON.parse(response.text)[0].user).toHaveProperty('username');
    expect(JSON.parse(response.text)[0].user).toHaveProperty('image');
    expect(JSON.parse(response.text)[0].user).toHaveProperty('friends');
    expect(JSON.parse(response.text)[0].user).toHaveProperty('reviews');
    expect(JSON.parse(response.text)[0].user).toHaveProperty('photos');
  });

});

describe('test error handler of reviews route', async () => {
  const response = await request(app).get('/businesses/xxxx/reviews');

  test('it should throw an error for non-existent business id', async () => {
    expect(response.statusCode).toBe(500);
  });
});

describe('test error handlers for addUsersToReviews function', async () => {
  const testData = [{
    user: {
      userId: 'llll',
    },
  }];

  test('it should throw an error when given a non-existent user id', async () => {
    const response = await helpers.addUsersToReviews(testData);

    expect(response[0].user).toBe('user not found');
  });
});
