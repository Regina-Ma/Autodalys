const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const makeSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Make", makeSchema);
