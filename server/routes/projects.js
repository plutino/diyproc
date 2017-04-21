const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/project_controller')

router.get('/', ctrl.index);
router.post('/', ctrl.new);
router.get('/:projectId', ctrl.show)
router.post('/:projectId', ctrl.update)

module.exports = router;
