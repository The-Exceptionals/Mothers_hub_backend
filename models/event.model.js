const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Events = Schema({
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
  unlike: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Events", Events);
