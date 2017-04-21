const Project = require('../models/project')
const User = require('../models/user')

module.exports = {
  index: (req, res) => {
  },

  new: (req, res) => {
  },

  show: (req, res) => {
  },

  update: (req, res) => {
    console.log(req.params)
    res.json({
      status: 'success'
    })
  }
}
