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
        fuelType: [
          {
            diesel: {
              type: String,
              required: true,
            },
            gasoline: {
              type: String,
              required: true,
            },
            gasoline_gas: {
              type: String,
              required: true,
            },
            gasoline_electricity: {
              type: String,
              required: true,
            },
            electricity: {
              type: String,
              required: true,
            },
            diesel_electricity: {
              type: String,
              required: true,
            },
            diesel_gas: {
              type: String,
              required: true,
            },
            bioethanol: {
              type: String,
              required: true,
            },
            other: {
              type: String,
              required: true,
            },
          },
        ],
        color: [
          {
            black: {
              type: String,
              required: true,
            },
            grey: {
              type: String,
              required: true,
            },
            white: {
              type: String,
              required: true,
            },
            violet: {
              type: String,
              required: true,
            },
            blue: {
              type: String,
              required: true,
            },
            green: {
              type: String,
              required: true,
            },
            yellow: {
              type: String,
              required: true,
            },
            orange: {
              type: String,
              required: true,
            },
            red: {
              type: String,
              required: true,
            },
            brown: {
              type: String,
              required: true,
            },
            mixed: {
              type: String,
              required: true,
            },
            other: {
              type: String,
              required: true,
            },
          },
        ],
        steeringWheelPosition: [
          {
            left: {
              type: String,
              required: true,
            },
            right: {
              type: String,
              required: true,
            },
          },
        ],
        transmission: [
          {
            manual: {
              type: String,
              required: true,
            },
            automatic: {
              type: String,
              required: true,
            },
          },
        ],
        bodyType: [
          {
            other: {
              type: String,
              required: true,
            },
            sedan: {
              type: String,
              required: true,
            },
            hatchback: {
              type: String,
              required: true,
            },
            caravan: {
              type: String,
              required: true,
            },
            minivan: {
              type: String,
              required: true,
            },
            suv: {
              type: String,
              required: true,
            },
            coupe: {
              type: String,
              required: true,
            },
            commercial: {
              type: String,
              required: true,
            },
            cabriolet: {
              type: String,
              required: true,
            },
            roadster: {
              type: String,
              required: true,
            },
            limousine: {
              type: String,
              required: true,
            },
            pickup: {
              type: String,
              required: true,
            },
          },
        ],
        drivingWheels: [
          {
            front: {
              type: String,
              required: true,
            },
            rear: {
              type: String,
              required: true,
            },
            all: {
              type: String,
              required: true,
            },
            four: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
    partEnums: [
      {
        condition: [
          {
            new: {
              type: String,
              required: true,
            },
            used: {
              type: String,
              required: true,
            },
            refurbished: {
              type: String,
              required: true,
            },
          },
        ],
        position: [
          {
            front: {
              type: String,
              required: true,
            },
            rear: {
              type: String,
              required: true,
            },
            left: {
              type: String,
              required: true,
            },
            right: {
              type: String,
              required: true,
            },
            front_left: {
              type: String,
              required: true,
            },
            front_right: {
              type: String,
              required: true,
            },
            rear_left: {
              type: String,
              required: true,
            },
            rear_right: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  },
});

module.exports = mongoose.model("Language", languageSchema);
