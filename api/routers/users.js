const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
router.post("/login", controller.login_process);
module.exports = router;