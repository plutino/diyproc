const Resource = require('../../app/models/resource')

factory.define('tool', Resource, {
  name: factory.chance('word'),
  type: 'tool'
})

factory.define('material', Resource, {
  name: factory.chance('word'),
  type: 'material'
})
