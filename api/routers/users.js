const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");
router.post("/login", controller.login_process);
router.post("/register", controller.register_process);
router.post("/mentors/mine", controller.my_mentor);
router.post("/mentors/verify", controller.verify_mentor);
router.post("/students/mine", controller.my_students);
router.post("/mentors/", controller.all_mentor_need_verifikasi);
module.exports = router;
