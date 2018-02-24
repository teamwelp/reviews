const db = require('../../db/models/db.js');
const mongoose = require('mongoose');

describe('test database methods', () => {
  const testData = {
    userId: 1000,
    username: 'world',
    image: 'hello',
    friends: 100,
    reviews: 200,
    photos: 300,
  };

  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/testDB');
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
  });

  test('should insert data to DB when insertData method is invoked', async () => {
    await db.insertData('users', testData);
    const data = await db.models.users.find().exec();

    expect(data[0].userId).toEqual(testData.userId);
    expect(data[0].username).toEqual(testData.username);
    expect(data[0].image).toEqual(testData.image);
    expect(data[0].friends).toEqual(testData.friends);
    expect(data[0].reviews).toEqual(testData.reviews);
    expect(data[0].photos).toEqual(testData.photos);
  });

  test('should retrieve data when retrieveData method is invoked', async () => {
    const data = await db.retrieveData('users', {});

    expect(testData.userId).toEqual(data[0].userId);
    expect(testData.username).toEqual(data[0].username);
    expect(testData.image).toEqual(data[0].image);
    expect(testData.friends).toEqual(data[0].friends);
    expect(testData.reviews).toEqual(data[0].reviews);
    expect(testData.photos).toEqual(data[0].photos);
  });
});
