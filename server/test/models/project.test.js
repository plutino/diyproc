require('../helper')
const Project = require('../../app/models/project')

describe('Project', function(){
  describe('attributes', function(){
    describe('name', function(){
      it('cannot be blank', function(){
        let proj = new Project
        let err = proj.validateSync()
        expect(err.errors.name.message).to.equal('Project name cannot be blank')

        proj.name = ''
        err = proj.validateSync()
        expect(err.errors.name.message).to.equal('Project name cannot be blank')
      })
    })

    describe('users', function(){
      it('can not be empty', function(){
        let proj = new Project
        return proj.validate().catch(err => {
          expect(err.errors.users.message).to.equal('Project must have at least one user')
        })
      })
      
      it('should have roles', function(){
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

          return proj.validate().catch(err => {
            expect(err.errors['users.1.role'].message)
            .to.equal('Project user must have a role')
            expect(err.errors['users.0.role']).not.to.exist
          })
        })
      })
    })
  })
})
