const Task = require('../../app/models/task')

factory.define('task', Task, {
  description: factory.chance('paragraph'),
})

factory.define('taskStarted', Task, {
  description: factory.chance('paragraph'),
  state: 'started',
  startedAt: Date.now
})

factory.define('taskFinished', Task, {
  description: factory.chance('paragraph'),
  state: 'started',
  startedAt: () => { new Date() - 3600000 },
  finishedAt: Date.now
})
