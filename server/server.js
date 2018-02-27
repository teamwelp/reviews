const app = require('./index.js');

app.listen(8000, () => {
  console.log('listening to port 8000');
});

module.exports = app;
