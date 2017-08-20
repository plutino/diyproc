require('../helper')
const Task = require('../../app/models/task')

describe('Task', function(){
  describe('attributes', function(){
    describe('description', function(){
      it('cannot be blank', function(){
        let task = new Task
        return task.validate().catch(err => {
          expect(err.errors.description.message).to.equal('Task description cannot be blank')
        })
      })
    })

    describe('state', function(){
      let validStates = ['unstarted', 'started', 'paused', 'finished']
      let invalidStates = ['', 'random string']

      validStates.forEach(state => {
        it('can be ' + state, function(){
          let task = new Task
          task.state = state
          return task.validate().catch(err => {
            expect(err.errors.state).not.to.exist
          })
        })
      })

      invalidStates.forEach(state => {
        it('cannot be ' + (state === '' ? 'empty' : state), function(){
          let task = new Task
          task.state = state
          return task.validate().catch(err => {
            expect(err.errors.state).to.exist
          })
        })
      })
    })

    describe('startedAt', function(){
      let statesRequiresStartedAt = ['started', 'paused', 'finished']
      let statesNotRequireStartedAt = ['unstarted']

      statesRequiresStartedAt.forEach(state => {
        it('must be present if task is ' + state, function(){
          let task = new Task
          task.state = state
          return task.validate().catch(err => {
            expect(err.errors.startedAt.message)
            .to.be.equal('startedAt is required unless a task was never started')
          })
        })
      })

      statesNotRequireStartedAt.forEach(state => {
        it('should not be required if task is ' + state, function(){
          let task = new Task
          task.state = state
          return task.validate().catch(err => {
            expect(err.errors.startedAt).not.to.be.exist
          })
        })
      })
    })

    describe('finishedAt', function(){
      let statesRequiresFinishedAt = ['finished']
      let statesNotRequireFinishedAt = ['unstarted', 'started', 'paused']

      statesRequiresFinishedAt.forEach(state => {
        it('must be present if task is ' + state, function(){
          let task = new Task
          task.state = state
          return task.validate().catch(err => {
            expect(err.errors.finishedAt.message)
            .to.be.equal('finishedAt is required for a finished task')
          })
        })
      })

      statesNotRequireFinishedAt.forEach(state => {
        it('should not be required if task is ' + state, function(){
          let task = new Task
          task.state = state
          return task.validate().catch(err => {
            expect(err.errors.finishedAt).not.to.be.exist
          })
        })
      })
    })
  })
})
