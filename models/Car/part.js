const mongoose = require("mongoose");
const carSchema = require("./car");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  iconURL: {
    type: String,
    required: true,
  },
});

const partSchema = new Schema({
  SKU: {
    type: String,
    required: true,
  },
  category: {
    type: categorySchema,
    required: true,
  },
  superCategory: categorySchema.add({
    superCategory: {
      type: categorySchema,
      required: true,
    },
  }),
  car: {
    type: carSchema,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  productCode: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    enum: [
      "front",
      "rear",
      "left",
      "right",
      "front_left",
      "front_right",
      "rear_left",
      "rear_right",
    ],
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  priceVAT: {
    type: Number,
    required: true,
  },
  photoUrls: [
    {
      type: String,
      required: false,
    },
  ],
  condition: {
    type: String,
    enum: ["new", "used"],
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "reserved", "sold"],
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
});

module.exports = mongoose.model("Part", partSchema);
