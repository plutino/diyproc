global.settings = require('./init/settings')

module.exports = function() {
  return require('./init/mongoose')()
}
