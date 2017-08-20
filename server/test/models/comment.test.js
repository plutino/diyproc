require('../helper')
const Comment = require('../../app/models/comment')

describe('Comment', function(){
  describe('attributes', function(){
    describe('body', function(){
      it('cannot be blank', function(done){
        let comment = new Comment
        comment.validate(err => {
          expect(err.errors.body.message).to.equal('Comment body cannot be blank')
          done()
        })
      })
    })

    describe('author', function(){
      it('should be present', function(done){
        let comment = new Comment
        comment.validate(err => {
          expect(err.errors.author.message).to.equal('Comment must have an author')
          done()
        })
      })
    })
  })
})