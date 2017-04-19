const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = require('./comment')

const resourceSchema = new Schema({
  name: String,
  type: String,
  image: String,
  quantityRequired: Number,
  quantityAvailable: Number,
  cost: Number,
  comments: [commentSchema]
})

class Resource {
  add(quantity, cost){
    this.quantityAvailable += quantity
    this.cost += cost
  }
}

resourceSchema.loadClass(Resource)

module.exports = resourceSchema
