const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const partSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  product_code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    enum: ["EUR", "USD"],
    required: true,
  },
  photos: [
    {
      type: String,
      required: false,
    },
  ],
  condition: {
    type: String,
    enum: ["N", "U"], // N - new, U - used
    required: true,
  },
  status: {
    type: String,
    enum: ["A", "R", "S"], // A - available, R - reserved, S - sold
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  model_id: {
    type: Schema.Types.ObjectId,
    ref: "Model",
    required: true,
  },
  car_id: {
    type: Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
});

module.exports = mongoose.model("Part", partSchema);
