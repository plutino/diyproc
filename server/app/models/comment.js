const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  body: {
    type: String,
    required: 'Comment body cannot be blank'
  },
  author: {
    type : Schema.ObjectId,
    ref : 'User',
    required: 'Comment must have an author'
  }
})

module.exports = mongoose.model('Comment', commentSchema)
