var User = require('../../app/models/user')

factory.define('user', User, {
  email: factory.seq('User.email', n => `user-${n}@mpt.test`)
})
