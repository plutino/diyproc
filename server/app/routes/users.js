const User = require('../models/user')

module.exports = router => {
  router.route('/')
  .get((req, res, next) => {
    //list

  })
  .post((req, res, next) => {
    //create

  });

  router.route('/:projectId')
  .get((req, res, next) => {
    //fetch

  })
  .put((req, res, next) => {
    //update

  })
  .delete((req, res, next) => {
    //delete

  });
}
