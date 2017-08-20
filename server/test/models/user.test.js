const User = require('../../app/models/user')

describe('User', function(){
  describe('validations', function(){
    it('should require an email', function(done){
      let user = new User
      user.validate(err => {
        expect(err.errors.email.message).to.equal('User email is required')
        done()
      })
    })
  })
})
