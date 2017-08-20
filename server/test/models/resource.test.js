require('../helper')
const Resource = require('../../app/models/resource')

describe('Resource', function(){
  describe('attributes', function(){
    describe('name', function(){
      it('cannot be blank', function(){
        let res = new Resource
        return res.validate().catch(err => {
          expect(err.errors.name.message).to.equal('Resource name cannot be blank')
        })
      })
    })

    describe('type', function () {
      it('should be present', function(){
        let res = new Resource
        return res.validate().catch(err => {
          expect(err.errors.type.message).to.equal('Resource type is required')
        })
      })

      let validTypes = ['tool', 'material']
      let invalidTypes = ['', 'random string']

      validTypes.forEach(tp => {
        it('can be ' + tp, function(){
          let res = new Resource
          res.type = tp
          return res.validate().catch(err => {
            expect(err.errors.type).not.to.exist
          })
        })
      })

      invalidTypes.forEach(tp => {
        it('cannot be ' + (tp === '' ? 'empty' : tp), function(){
          let res = new Resource
          res.type = tp
          return res.validate().catch(err => {
            expect(err.errors.type).to.exist
          })
        })
      })
    })

    describe('quantityRequired', function(){
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

      it('should default to 1', function(){
        return factory.create('material').then(res => {
          expect(res.quantityRequired).to.equal(1)
        })
      })
    })

    describe('quantityAvailable', function(){
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

      it('should default to 0', function(){
        return factory.create('material').then(res => {
          expect(res.quantityAvailable).to.equal(0)
        })
      })
    })

    describe('cost', function(){
      it('should default to 0', function(){
        return factory.create('material').then(res => {
          expect(res.cost).to.equal(0)
        })
      })
    })
  })
})
