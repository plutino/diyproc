require('../helper')
const User = require('../../app/models/user')

describe('User', function(){
  describe('attributes', function(){
    describe('email', function(){
      it('should be required', function(done){
        let user = new User
        user.validate(err => {
          expect(err.errors.email.message).to.equal('User email is required')
          done()
        })
      })
    })
  })
})
