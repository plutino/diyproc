const Comment = require('../../app/models/comment')

describe('Comment', function(){
  describe('validations', function(){
    it('should not allow blank body', function(done){
      let comment = new Comment
      comment.validate(err => {
        expect(err.errors.body.message).to.equal('Comment body cannot be blank')
        done()
      })
    })

    it('should require an author', function(done){
      let comment = new Comment
      comment.validate(err => {
        expect(err.errors.author.message).to.equal('Comment must have an author')
        done()
      })
    })
  })
})