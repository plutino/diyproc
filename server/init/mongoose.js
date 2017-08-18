const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = function() {
  const databaseUri = `mongodb://${settings.mongodb.host}/${settings.mongodb.database}`;
  return mongoose.connect(databaseUri, {useMongoClient: true});
}
