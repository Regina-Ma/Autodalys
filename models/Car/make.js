const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const makeSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  make_logo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Make", makeSchema);
