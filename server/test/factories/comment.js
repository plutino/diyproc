const Comment = require('../../app/models/comment')

factory.define('comment', Comment, {
  body: factory.chance('sentence'),
  author: factory.assoc('user', '_id')
})
