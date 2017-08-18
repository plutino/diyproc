const Project = require('../models/project')
const User = require('../models/user')

module.exports = {
  index: (req, res) => {
  },

  create: (req, res) => {
  },

  fetch: (req, res) => {
  },

  update: (req, res) => {
    console.log(req.params)
    res.json({
      status: 'success'
    })
  }
}
