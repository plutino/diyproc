before('ensure MongoDB is connected', function(){
  return require('../init/mongoose')()
})

afterEach('clean up test database', function(){
  factory.cleanUp()
})
