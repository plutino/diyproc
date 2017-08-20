require('../helper')
const Comment = require('../../app/models/comment')

describe('Comment', function(){
  describe('attributes', function(){
    describe('createdAt', function(){
      it('should have a default', function(){
        return factory.create('comment').then(comment => {
          expect(comment.createdAt).to.exist
        })
      })
    })

    describe('updatedAt', function(){
      it('should have a default', function(){
        return factory.create('comment').then(comment => {
          expect(comment.updatedAt).to.exist
        })
      })
    })

    describe('body', function(){
      it('cannot be blank', function(){
        let comment = new Comment
        return comment.validate().catch(err => {
          expect(err.errors.body.message).to.equal('Comment body cannot be blank')
        })
      })
    })

    describe('author', function(){
      it('should be present', function(){
        let comment = new Comment
        return comment.validate().catch(err => {
          expect(err.errors.author.message).to.equal('Comment must have an author')
        })
      })
    })
  })
})