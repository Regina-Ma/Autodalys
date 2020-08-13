const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const languageSchema = new Schema({
  lithuanian: {
    pages: [
      {
        url: {
          type: String,
          required: true,
        },
        pageTitle: {
          type: String,
          required: true,
        },
        pageDescription: {
          type: String,
          required: true,
        },
        pageFields: [
          {
            type: Map,
            of: String,
          },
        ],
      },
    ],
    carEnums: [
      {
        fuelType: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
        },
        steeringWheelPosition: {
          type: String,
          required: true,
        },
        transmission: {
          type: String,
          required: true,
        },
        bodyType: {
          type: String,
          required: true,
        },
        drivingWheels: {
          type: String,
          required: true,
        },
      },
    ],
    partEnums: [
      {
        position: {
          type: String,
          required: true,
        },
        condition: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

module.exports = mongoose.model("Language", languageSchema);
