const Resource = require('../../app/models/resource')

describe('Resource', function(){
  describe('validations', function(){
    it('should require name', function(done){
      let res = new Resource
      res.validate(err => {
        expect(err.errors.name.message).to.equal('Resource name cannot be blank')
        done()
      })
    })

    it('should require resource type', function(done){
      let res = new Resource
      res.validate(err => {
        expect(err.errors.type.message).to.equal('Resource type is required')
        done()
      })
    })

    let validTypes = ['tool', 'material']
    let invalidTypes = ['', 'undefined']

    validTypes.forEach(tp => {
      it('should allow ' + tp + ' type', function(done){
        let res = new Resource
        res.type = tp
        res.validate(err => {
          expect(err.errors.type).not.to.exist
          done()
        })
      })
    })

    invalidTypes.forEach(tp => {
      it('should not allow ' + (tp === '' ? 'empty' : tp) + ' type', function(done){
        let res = new Resource
        res.type = tp
        res.validate(err => {
          expect(err.errors.type).to.exist
          done()
        })
      })
    })

    it('should require quantityRequired to be 1 or greater', function(){
      let res = new Resource
      res.quantityRequired = 0
      err = res.validateSync()
      expect(err.errors.quantityRequired.message)
      .to.equal('Required quantity must be 1 or greater')

      res.quantityRequired = 2
      err = res.validateSync()
      expect(err.errors.quantityRequired).not.to.exist
    })

    it('should require quantityAvailable not to be negative', function(){
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
