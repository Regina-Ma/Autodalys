const mongoose = require("mongoose");
const makeSchema = require("./make");

const Schema = mongoose.Schema;

const modelSchema = new Schema({
  make: makeSchema,
  series: {
    type: String,
    required: false,
  },
  model: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Model", modelSchema);
