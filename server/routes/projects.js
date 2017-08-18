const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/project_controller')

router.get('/', ctrl.index);
router.post('/', ctrl.create);
router.get('/:projectId', ctrl.fetch)
router.put('/:projectId', ctrl.update)

module.exports = router;
