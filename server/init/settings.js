
function _setEnv(){
  // default NODE_ENV and NODE_APP_INSTANCE, used by settings only
  if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'
  if (process.env.SLICE && !process.env.NODE_APP_INSTANCE) {
    process.env.NODE_APP_INSTANCE = process.env.SLICE
  }
}

function loadSettings(){
  _setEnv()
  const settings = require('config')
  return settings
}

module.exports = loadSettings()
