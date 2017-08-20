const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Comment = require('./comment')

const referenceSchema = new Schema({
  body: {
    type: String,
    required: 'Reference body cannot be blank'
  },
  tags: [String],
  comments: [Comment.schema]
})

module.exports = mongoose.model('Reference', referenceSchema)
