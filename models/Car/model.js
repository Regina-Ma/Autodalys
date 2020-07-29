const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const modelSchema = new Schema({
  make_id: {
    type: Schema.Types.ObjectId,
    ref: "Make",
    required: true,
  },
  series_id: {
    type: Schema.Types.ObjectId,
    ref: "Series",
    required: false,
  },
  model: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Model", modelSchema);
