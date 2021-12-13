const mongoose = require("mongoose");
const article = require("../models/article");
const {
  create500Response,
  create200CountResponse,
  create201Response,
} = require("./responseController");

exports.get_all_article = (req, res, next) => {
  article
    .find({})
    .populate("created_by")
    .then((result) => {
      create200CountResponse(res, result, result.length);
    })
    .catch((err) => {
      create500Response(res, err);
    });
};

exports.create_new_article = (req, res, next) => {
  let newArticle = new article({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    content: req.body.content,
    thubnail: req.file.path,
    created_by: req.body.created_by,
  });

  newArticle
    .save()
    .then((response) => {
      create201Response(res, response);
    })
    .catch((err) => {
      create500Response(res, err);
    });
};
