const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const databaseUri = `mongodb://${settings.mongodb.host}/${settings.mongodb.database}`;

module.exports = mongoose.connect(databaseUri, {useMongoClient: true})
                         .then(()=>{
                           console.log('Connected to ' + databaseUri)
                         }).catch(err => {
                           console.error('Failed to connect to MongoDB')
                           throw err
                         })
