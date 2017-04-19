const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = require('./comment')

const taskSchema = new Schema({
  type: String,
  description: String,
  state: {type: String, default: 'unstarted'},
  createdAt: { type: Date, default: Date.now },
  startedAt: { type: Date, default: Date.now },
  finishedAt: { type: Date, default: Date.now },
  images: [String],
  videos: [String],
  sortIndex: Number,
  comments: [commentSchema]
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

  finish(){
    this.state = 'finished'
  }
  
  isFinished(){
    return this.state === 'finished'
  }
}

taskSchema.loadClass(Task)

module.exports = taskSchema
