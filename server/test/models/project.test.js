require('../helper')
const Project = require('../../app/models/project')

describe('Project', function(){
  describe('attributes', function(){
    describe('createdAt', function(){
      it('should have a default', function(){
        return factory.create('project').then(proj => {
          expect(proj.createdAt).to.exist
        })
      })
    })

    describe('updatedAt', function(){
      it('should have a default', function(){
        return factory.create('project').then(proj => {
          expect(proj.updatedAt).to.exist
        })
      })
    })

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
      it('must include at least one owner', function(){
        let proj = new Project
        return proj.validate().catch(err => {
          expect(err.errors.users.message).to.equal('Project must have at least one owner')
        })
      })

      describe('role', function(){
        it('should be required', function(){
          return Promise.all([
            factory.create('project'),
            factory.create('user')
          ]).then(data => {
            let [proj, user] = data
            proj.users.push({
              user: user
            })
            return proj.validate().catch(err => {
              expect(err.errors['users.1.role'].message)
              .to.equal('Project user must have a role')
              expect(err.errors['users.0.role']).not.to.exist
            })
          })
        })

        let validRoles = ['owner', 'collaborator', 'follower']
        let invalidRoles = ['', 'random string']

        validRoles.forEach(role => {
          it('can be ' + role, function(){
            return Promise.all([
              factory.create('project'),
              factory.create('user')
            ]).then(data => {
              let [proj, user] = data
              proj.users.push({
                role: role,
                user: user
              })
              return proj.validate().catch(err => {
                expect(err.errors['users.1.role']).not.to.exist
              })
            })
          })
        })

        invalidRoles.forEach(role => {
          it('cannot be ' + (role === '' ? 'empty' : role), function(){
            return Promise.all([
              factory.create('project'),
              factory.create('user')
            ]).then(data => {
              let [proj, user] = data
              proj.users.push({
                role: role,
                user: user
              })
              return proj.validate().catch(err => {
                expect(err.errors['users.1.role']).to.exist
              })
            })
          })
        })
      })

      describe('user', function(){
        it('should be required', function(){
          return factory.create('project').then((proj) => {
            proj.users.push({
              role: 'collaborator'
            })
            return proj.validate().catch(err => {
              expect(err.errors['users.1.user']).to.exist
              expect(err.errors['users.0.user']).not.to.exist
            })
          })
        })
      })
    })
  })
})
