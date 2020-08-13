const mongoose = require("mongoose");
const powerSchema = require("./engine");

const Schema = mongoose.Schema;

const carSchema = new Schema({
  model: {
    modelId: {
      type: Schema.Types.ObjectId,
      ref: "Model",
      required: true,
    },
    modelName: {
      type: String,
      required: true,
    },
    makeName: {
      type: String,
      required: true,
    },
  },
  engine: {
    engineId: {
      type: Schema.Types.ObjectId,
      ref: "Engine",
      required: false,
    },
    engineFuel: {
      type: String,
      required: true,
    },
    engineCapacity: {
      type: Number,
      required: true,
    },
    enginePower: {
      type: powerSchema,
      required: true,
    },
  },
  productionYear: {
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
  parts: [
    {
      partId: {
        type: Schema.Types.ObjectId,
        ref: "Part",
      },
      name: {
        type: String,
        required: true,
      },
      required: false,
    },
  ],
});

module.exports = mongoose.model("Car", carSchema);
