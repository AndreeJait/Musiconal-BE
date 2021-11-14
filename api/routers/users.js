const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");
router.post("/login", controller.login_process);
router.post("/register", controller.register_process);
module.exports = router;
