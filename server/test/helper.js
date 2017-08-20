before('ensure MongoDB is connected', function(done){
  require('../init/mongoose')().then(() => {
    done()
  })
})

afterEach('clean up test database', function(){
  factory.cleanUp()
})
