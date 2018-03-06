const app = require('./index.js');

const server = app.listen(8000, () => {
  console.log('listening to port 8000');
});

module.exports = server;
