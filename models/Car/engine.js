const mongoose = require("mongoose");
const modelSchema = require("./model");

const Schema = mongoose.Schema;

const engineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  productionStart: {
    type: String,
    required: true,
  },
  productionEnd: {
    type: String,
    required: true,
  },
  models: [modelSchema],
  power: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  fuel: {
    type: String,
    enum: [
      "diesel",
      "gasoline",
      "gasoline_gas",
      "gasoline_electricity",
      "electricity",
      "diesel_electricity",
      "diesel_gas",
      "bioethanol",
      "other",
    ],
    required: true,
  },
});

module.exports = mongoose.model("Engine", engineSchema);
