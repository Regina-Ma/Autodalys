const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const languageSchema = new Schema({
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Language", languageSchema);
