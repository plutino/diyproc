const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Comment = require('./comment')

const resourceSchema = new Schema({
  name: {
    type: String,
    required: 'Resource name cannot be blank'
  },
  type: {
    type: String,
    required: 'Resource type is required',
    enum: ['tool', 'material']
  },
  description: String,
  quantityRequired: {
    type: Number,
    min: [1, 'Required quantity must be 1 or greater'],
    default: 1,
  },
  quantityAvailable: {
    type: Number,
    min: [0, 'Available quantity cannot be negative'],
    default: 0
  },
  cost: {
    type: Number,
    default: 0.0
  },
  comments: [Comment.schema]
})

class Resource {
  add(quantity, cost){
    this.quantityAvailable += quantity
    this.cost += cost
  }
}

resourceSchema.loadClass(Resource)

module.exports = mongoose.model('Resource', resourceSchema)
