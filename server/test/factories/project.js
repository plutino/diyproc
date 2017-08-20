var Project = require('../../app/models/project')

factory.define('project', Project, {
  name: factory.chance('sentence', 5),
  users: [{
    role: 'owner',
    user: factory.assoc('user')
  }]
})
