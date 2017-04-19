const mongoose = require('mongoose');
const userSchema = require('schemas/project')

module.exports = mongoose.model('Project', projectSchema)
