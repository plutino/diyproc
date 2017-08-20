const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const databaseUri = `mongodb://${settings.mongodb.host}/${settings.mongodb.database}`;

module.exports = () => {
  if (mongoose.connection.db) return Promise.resolve()
  return mongoose.connect(databaseUri, {useMongoClient: true})
                 .then(()=>{
                   console.log('Connected to ' + databaseUri)
                 }, err => {
                   console.error('Failed to connect to MongoDB')
                   throw err
                 })
}
