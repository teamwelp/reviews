const app = require('./index.js');

<<<<<<< HEAD
const server = app.listen(8000, () => {
  console.log('listening to port 8000');
});

module.exports = server;
=======
app.listen(8000, () => {
  console.log('listening to port 8000');
});

module.exports = app;
>>>>>>> master
