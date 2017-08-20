const Project = require('../../app/models/project')

describe('Project', function(){
  describe('validations', function(){
    it('should require a name', function(){
      let proj = new Project
      let err = proj.validateSync()
      expect(err.errors.name.message).to.equal('Project name cannot be blank')

      proj.name = ''
      err = proj.validateSync()
      expect(err.errors.name.message).to.equal('Project name cannot be blank')
    })

    it('should have at least one user', function(done){
      let proj = new Project
      proj.validate(err => {
        expect(err.errors.users.message).to.equal('Project must have at least one user')
        done()
      })
    })
  })
})
