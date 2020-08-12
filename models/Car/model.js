const mongoose = require("mongoose");

const Schema = mongoose.Schema;

function modelName(make, model, start, end) {
  return `${make} ${model} (${start} - ${end})`;
}

const modelSchema = new Schema({
  make: {
    makeID: {
      type: Schema.Types.ObjectId,
      ref: "Make",
    },
    makeName: {
      type: String,
      required: true,
    },
  },
  model: {
    type: String,
    required: true,
  },
  modelFullName: {
    type: String,
    get: modelName(
      this.make.makeName,
      this.model,
      this.productionStart,
      this.productionEnd
    ),
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
  engines: [
    {
      type: Schema.Types.ObjectId,
      ref: "Engine",
    },
  ],
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
});

module.exports = mongoose.model("Model", modelSchema);
