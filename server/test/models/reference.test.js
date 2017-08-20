const Reference = require('../../app/models/reference')

describe('Reference', function(){
  describe('validations', function(){
    it('should require a body', function(done){
      let ref = new Reference
      ref.validate(err => {
        expect(err.errors.body.message).to.equal('Reference body cannot be blank')
        done()
      })
    })
  })
})
