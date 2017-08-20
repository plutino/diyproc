const chai = require('chai')
const sinon = require('sinon')

global.assert = chai.assert
global.expect = chai.expect

global.spy = sinon.spy

process.env.NODE_ENV = 'test'
require('../init/init')()
