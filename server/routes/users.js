const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/user_controller')

router.get('/', ctrl.index);

module.exports = router;
