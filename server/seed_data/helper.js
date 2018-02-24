const db = require('./../../db/models/db.js');

const insertDataToDB = (dbModel, data, cb) => {
  const promises = [];
  for (let i = 0; i < data.length; i += 1) {
    promises.push(db.insertData(dbModel, data[i]));
  }

  Promise.all(promises).then(cb);
};

module.exports.insertDataToDB = insertDataToDB;
