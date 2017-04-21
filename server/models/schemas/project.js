const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = require('./comment')
const referenceSchema = require('./reference')
const resourceSchema = require('./resource')
const taskSchema = require('./task')

const projectSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  name: String,
  description: String,
  tags: [String],
  users: [{
    role: String,
    user: {type: Schema.ObjectId, ref: 'User'}
  }],
  tools: [resourceSchema],
  materials: [resourceSchema],
  tasks: [taskSchema],
  comments: [commentSchema]
})

module.exports = projectSchema
