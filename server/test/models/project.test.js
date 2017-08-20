require('../helper')
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

    it('should require roles for all project users', function(done){
      factory.createMany('user', 2)
      .then((users) => {
        let proj = new Project
        proj.users.push({
          role: 'owner',
          user: users[0]
        })
        proj.users.push({
          user: users[1]
        })

        proj.validate(err => {
          expect(err.errors['users.1.role'].message)
          .to.equal('Project user must have a role')
          expect(err.errors['users.0.role']).not.to.exist
          done()
        })
      })
    })
  })
})
