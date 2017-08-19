const Project = require('../models/project')

module.exports = router => {
  router.route('/')
  .get((req, res, next) => {
    // list
    res.json([
     {
       id: 1,
       name: 'p1'
     },
     {
       id: 2,
       name: 'p2'
     }
    ])
  })
  .post((req, res, next) => {
    // create

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
