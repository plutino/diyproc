var User = require('../../app/models/user')

factory.define('user', User, {
  email: factory.sequence('User.email', n => `user-${n}@mpt.test`)
})
