const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  text: String,
  author: { type : Schema.ObjectId, ref : 'User' }
})

module.exports = commentSchema
