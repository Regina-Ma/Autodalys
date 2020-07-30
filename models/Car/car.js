const mongoose = require("mongoose");
const modelSchema = require("./model");
const engineSchema = require("./engine");

const Schema = mongoose.Schema;

const carSchema = new Schema({
  model: {
    type: modelSchema,
    required: true,
  },
  engine: {
    type: engineSchema,
    required: false,
  },
  productionYear: {
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
  color: {
    type: String,
    enum: [
      "black",
      "grey",
      "white",
      "violet",
      "blue",
      "green",
      "yellow",
      "orange",
      "red",
      "brown",
      "mixed",
      "other",
    ],
    required: false,
  },
  steeringWheelPosition: {
    type: String,
    enum: ["left", "right"],
    required: false,
  },
  transmission: {
    type: String,
    enum: ["manual", "automatic"],
    required: false,
  },
  bodyType: {
    type: String,
    enum: [
      "other",
      "sedan",
      "hatchback",
      "caravan",
      "minivan",
      "suv",
      "coupe",
      "commercial",
      "cabriolet",
      "roadster",
      "limousine",
      "pickup",
    ],
    required: false,
  },
  drivingWheels: {
    type: String,
    enum: ["front", "rear", "all"],
    required: false,
  },
  photoUrls: [
    {
      type: String,
      required: false,
    },
  ],
});

module.exports = mongoose.model("Car", carSchema);
