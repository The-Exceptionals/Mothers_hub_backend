const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Posts = Schema({
  username: String,
  title: String,
  body: String,
  coverImage: {
    type: String,
    default: "",
  },
  like: {
    type: Number,
    default: 0,
  },
  comment: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Posts", Posts);
