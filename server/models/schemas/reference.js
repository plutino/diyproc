const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = require('./comment')

const referenceSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  type: String,
  url: String,
  comments: [commentSchema]
})

module.exports = referenceSchema
