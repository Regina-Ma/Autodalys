const mongoose = require("mongoose");
const carSchema = require("./car");
const powerSchema = require("./engine");
const { Decimal128 } = require("bson");

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
  productCode: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: categorySchema,
    required: true,
    unique: true,
  },
  superCategory: categorySchema.add({
    superCategory: {
      type: categorySchema,
      required: true,
    },
  }),
  car: {
    carId: {
      type: carSchema,
      required: false,
      unique: true,
    },
    make: {
      type: String,
      required: false,
    },
    model: {
      type: String,
      required: false,
    },
    engine: {
      type: Schema.Types.ObjectId,
      ref: "Engine",
    },
    engineCapacity: {
      type: Number,
      required: false,
    },
    enginePower: {
      type: powerSchema,
      required: false,
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
      required: false,
    },
    carProductionYear: {
      type: String,
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
    carColor: {
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
  },
  name: {
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
  priceWithoutVAT: {
    type: Number,
    required: true,
    default: function () {
      return this.price / 1.21;
    },
  },
  price: {
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
    enum: ["new", "used", "refurbished"],
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "reserved", "sold"],
    required: true,
  },
  dimensions: {
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
  },
  weight: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Part", partSchema);
