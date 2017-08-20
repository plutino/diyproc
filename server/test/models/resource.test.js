require('../helper')
const Resource = require('../../app/models/resource')

describe('Resource', function(){
  describe('attributes', function(){
    describe('name', function(){
      it('cannot be blank', function(done){
        let res = new Resource
        res.validate(err => {
          expect(err.errors.name.message).to.equal('Resource name cannot be blank')
          done()
        })
      })
    })

    describe('type', function () {
      it('should be present', function(done){
        let res = new Resource
        res.validate(err => {
          expect(err.errors.type.message).to.equal('Resource type is required')
          done()
        })
      })

      let validTypes = ['tool', 'material']
      let invalidTypes = ['', 'random string']

      validTypes.forEach(tp => {
        it('can be ' + tp, function(done){
          let res = new Resource
          res.type = tp
          res.validate(err => {
            expect(err.errors.type).not.to.exist
            done()
          })
        })
      })

      invalidTypes.forEach(tp => {
        it('cannot be ' + (tp === '' ? 'empty' : tp), function(done){
          let res = new Resource
          res.type = tp
          res.validate(err => {
            expect(err.errors.type).to.exist
            done()
          })
        })
      })
    })

    describe('quantityRequired', function () {
      it('should be 1 or greater', function(){
        let res = new Resource
        res.quantityRequired = 0
        err = res.validateSync()
        expect(err.errors.quantityRequired.message)
        .to.equal('Required quantity must be 1 or greater')

        res.quantityRequired = 2
        err = res.validateSync()
        expect(err.errors.quantityRequired).not.to.exist
      })
    })

    describe('quantityAvailable', function () {
      it('cannot be negative', function(){
        let res = new Resource
        res.quantityAvailable = -1
        err = res.validateSync()
        expect(err.errors.quantityAvailable.message)
        .to.equal('Available quantity cannot be negative')

        res.quantityAvailable = 0
        err = res.validateSync()
        expect(err.errors.quantityAvailable).not.to.exist

        res.quantityAvailable = 2
        err = res.validateSync()
        expect(err.errors.quantityAvailable).not.to.exist
      })
    })
  })
})
