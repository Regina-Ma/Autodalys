const mongoose = require("mongoose");

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
  production_start: {
    type: String,
    required: true,
  },
  production_end: {
    type: String,
    required: true,
  },
  model_id: {
    type: Schema.Types.ObjectId,
    ref: "Model",
    required: true,
  },
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
      "Diesel",
      "Gasoline",
      "Gasoline / gas",
      "Gasoline / electricity",
      "Electricity",
      "Diesel / electricity",
      "Diesel / gas",
      "Bioethanol",
      "Other",
    ],
    required: true,
  },
});

module.exports = mongoose.model("Engine", engineSchema);
