const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: 'User email is required'
  }
})

module.exports = mongoose.model('User', userSchema)
