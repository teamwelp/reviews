const app = require('./index.js');

const port = process.env.PORT | 9000;

const server = app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

module.exports = server;
