const mongoose = require('mongoose');
const projectSchema = require('schemas/project')

module.exports = mongoose.model('Project', projectSchema)
