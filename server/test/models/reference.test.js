require('../helper')
const Reference = require('../../app/models/reference')

describe('Reference', function(){
  describe('attributes', function(){
    describe('body', function(){
      it('cannot be blank', function(){
        let ref = new Reference
        return ref.validate().catch(err => {
          expect(err.errors.body.message).to.equal('Reference body cannot be blank')
        })
      })
    })
  })
})
