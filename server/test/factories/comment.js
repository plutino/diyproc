const Comment = require('../../app/models/comment')

factory.define('comment', Comment, {
  body: factory.chance('paragraph'),
  author: factory.assoc('user', '_id')
})
