
function _setEnv(){
  // default NODE_ENV and NODE_APP_INSTANCE, used by settings only
  if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'
  if (process.env.SLICE && !process.env.NODE_APP_INSTANCE) {
    process.env.NODE_APP_INSTANCE = process.env.SLICE
  }
}

function loadSettings(){
  _setEnv()
  let settings = require('config')
  // not ideal, but no good way to get around supplying array values through environment variables
  if (typeof(settings.faye.publishTokens) === 'string') {
    settings.faye.publishTokens = settings.faye.publishTokens.split(' ')
  }
  return settings
}

module.exports = loadSettings()
