const router = require('express').Router();
const ctrl = require('../controllers/user_controller')

router.get('/', ctrl.index);
router.post('/', ctrl.create);
router.get('/:userId', ctrl.fetch)
router.put('/:userId', ctrl.update)

module.exports = router;
