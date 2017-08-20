const chai = require('chai')
const sinon = require('sinon')

global.assert = chai.assert
global.expect = chai.expect

global.spy = sinon.spy

process.env.NODE_ENV = 'test'

global.settings = require('../init/settings')

// global factory
const factoryGirl = require('factory-girl')
global.factory = require('factory-girl').factory
factory.setAdapter(new factoryGirl.MongooseAdapter())
require('require-dir')('factories')
factory.cleanUp()
