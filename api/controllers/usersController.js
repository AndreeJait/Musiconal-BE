const mongoose = require("mongoose");
const Users = require("../models/users");

exports.login_process = (req, res, next) => {
  Users.findOne({
    username: req.body.username,
    password: req.body.password,
  })
    .then((response) => {
      if (response !== null) {
        res.status(200).json({
          message: "Sukses login",
          user: response,
        });
      } else {
        res.status(404).json({
          message: "User not found",
          err: new Error("User not found"),
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Internal server error",
        error: err,
      });
    });
};
exports.register_process = (req, res, next) => {
  let user = new Users({
    _id: mongoose.Types.ObjectId(),
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  });
  user
    .save()
    .then((response) => {
      res.status(200).json({
        message: "Success to register",
        user: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Internal server error",
        error: err,
      });
    });
};
