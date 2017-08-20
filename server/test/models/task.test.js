require('../helper')
const Task = require('../../app/models/task')

describe('Task', function(){
  describe('validations', function(){
    it('should require a description', function(done){
      let task = new Task
      task.validate(err => {
        expect(err.errors.description.message).to.equal('Task description cannot be blank')
        done()
      })
    })

    let validStates = ['unstarted', 'started', 'paused', 'finished']
    let invalidStates = ['', 'undefined']

    validStates.forEach(state => {
      it('should allow ' + state + ' state', function(done){
        let task = new Task
        task.state = state
        task.validate(err => {
          expect(err.errors.state).not.to.exist
          done()
        })
      })
    })

    invalidStates.forEach(state => {
      it('should not allow ' + (state === '' ? 'empty' : state) + ' state', function(done){
        let task = new Task
        task.state = state
        task.validate(err => {
          expect(err.errors.state).to.exist
          done()
        })
      })
    })

    let statesRequiresStartedAt = ['started', 'paused', 'finished']
    let statesNotRequireStartedAt = ['unstarted']

    statesRequiresStartedAt.forEach(state => {
      it('should require startedAt if task is ' + state, function(done){
        let task = new Task
        task.state = state
        task.validate(err => {
          expect(err.errors.startedAt.message)
          .to.be.equal('startedAt is required unless a task was never started')
          done()
        })
      })
    })

    statesNotRequireStartedAt.forEach(state => {
      it('should not require startedAt if task is ' + state, function(done){
        let task = new Task
        task.state = state
        task.validate(err => {
          expect(err.errors.startedAt).not.to.be.exist
          done()
        })
      })
    })

    let statesRequiresFinishedAt = ['finished']
    let statesNotRequireFinishedAt = ['unstarted', 'started', 'paused']

    statesRequiresFinishedAt.forEach(state => {
      it('should require finishedAt if task is ' + state, function(done){
        let task = new Task
        task.state = state
        task.validate(err => {
          expect(err.errors.finishedAt.message)
          .to.be.equal('finishedAt is required for a finished task')
          done()
        })
      })
    })

    statesNotRequireFinishedAt.forEach(state => {
      it('should not require finishedAt if task is ' + state, function(done){
        let task = new Task
        task.state = state
        task.validate(err => {
          expect(err.errors.finishedAt).not.to.be.exist
          done()
        })
      })
    })
  })
})
