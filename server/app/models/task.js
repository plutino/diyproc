const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Comment = require('./comment')

const taskSchema = new Schema({
  description: {
    type: String,
    required: 'Task description cannot be blank'
  },
  state: {
    type: String,
    default: 'unstarted',
    enum: ['unstarted', 'started', 'paused', 'finished']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  startedAt: {
    type: Date,
    required: [
      function(){
        return this.state != 'unstarted'
      },
      'startedAt is required unless a task was never started'
    ]
  },
  finishedAt: {
    type: Date,
    required: [
      function(){
        return this.state === 'finished'
      },
      'finishedAt is required for a finished task'
    ]
  },
  dependencies: [{
    type: Schema.ObjectId,
    ref: 'Task'
  }],
  comments: [Comment.schema]
})

class Task {
  start(){
    this.state = 'started'
  }

  isStarted(){
    return this.state === 'started'
  }

  unstart(){
    this.state = 'unstarted'
  }

  pause(){
    this.state = 'paused'
  }

  finish(){
    this.state = 'finished'
  }

  isFinished(){
    return this.state === 'finished'
  }
}

taskSchema.loadClass(Task)

module.exports = mongoose.model('Task', taskSchema)
