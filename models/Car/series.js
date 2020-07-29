const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const seriesSchema = new Schema({
  make_id: {
    type: Schema.Types.ObjectId,
    ref: "Make",
    required: true,
  },
  series: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Series", seriesSchema);
