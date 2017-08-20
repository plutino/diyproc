require('../helper')
const User = require('../../app/models/user')

describe('User', function(){
  describe('attributes', function(){
    describe('email', function(){
      it('should be required', function(){
        let user = new User
        return user.validate().catch(err => {
          expect(err.errors.email.message).to.equal('User email is required')
        })
      })
    })
  })
})
