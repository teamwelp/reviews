const app = require('./index.js');

const url = process.env.PORT | 9000;

const server = app.listen(url, () => {
  console.log(`listening to port ${url}`);
});

module.exports = server;
