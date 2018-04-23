const app = require('./index.js');

const url = process.env.URL | 9000;

const server = app.listen(url, () => {
  console.log(`listening to port ${url}`, process.env.MONGOLAB_URI);
});

module.exports = server;
