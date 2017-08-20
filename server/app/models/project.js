const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Comment = require('./comment')
const Reference = require('./reference')
const Resource = require('./resource')
const Task = require('./task')

const projectSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: 'Project name cannot be blank'
  },
  description: String,
  tags: [String],
  users: {
    type: [{
      role: {
        type: String,
        required: 'Project user must have a role',
        enum: ['owner', 'collaborator', 'follower']
      },
      user: { type: Schema.ObjectId, ref: 'User', required: true },
    }],
    validate: [
      function() {
        return this.users.map((u) => {return u.role}).includes('owner')
      },
      'Project must have at least one owner'
    ]
  },
  tools: [Resource.schema],
  materials: [Resource.schema],
  tasks: [Task.schema],
  comments: [Comment.schema]
})

module.exports = mongoose.model('Project', projectSchema)
