const mongoose = require("mongoose");
const powerSchema = require("./engine");

const Schema = mongoose.Schema;

// pardavėjo ardomo automobilio schema
const carSchema = new Schema(
  {
    // automobilio modelis
    model: {
      // automobilio modelio ID
      modelId: {
        type: Schema.Types.ObjectId,
        ref: "Model",
        required: true,
      },
      // automobilio modelio pavadinimas
      modelName: {
        type: String,
        required: true,
      },
      // automobilio markės pavadinimas
      makeName: {
        type: String,
        required: true,
      },
    },
    // automobilio variklis
    engine: {
      // automobilio variklio ID
      engineId: {
        type: Schema.Types.ObjectId,
        ref: "Engine",
        required: false,
      },
      // automobilio variklio pavadinimas
      engineName: {
        type: String,
        required: true,
      },
      // automobilio variklio kuro tipas
      engineFuel: {
        type: String,
        required: true,
      },
      // automobilio variklio tūris cm3
      engineCapacity: {
        type: Number,
        required: true,
      },
      // automobilio variklio galingumas kW
      enginePower: {
        type: Number,
        required: true,
      },
    },
    // automobilio pagaminimo metai
    productionYear: {
      type: String,
      required: true,
    },
    // automobilio spalva
    // REIKIA SUTIKRINTI ENUM SU MINIJAUS ATSIŲSTU SĄRAŠU
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
      translations: {
        lt: {
          type: String,
          required: true,
        },
        en: {
          type: String,
          required: true,
        },
      },
      required: false,
    },
    // automobilio vairo padėtis
    steeringWheelPosition: {
      type: String,
      enum: ["left", "right"],
      translations: {
        lt: {
          type: String,
          required: true,
        },
        en: {
          type: String,
          required: true,
        },
      },
      required: false,
    },
    // automobilio pavarų dėžės tipas
    transmission: {
      type: String,
      enum: ["manual", "automatic"],
      translations: {
        lt: {
          type: String,
          required: true,
        },
        en: {
          type: String,
          required: true,
        },
      },
      required: false,
    },
    // automobilio kėbulo tipas
    // REIKIA SUTIKRINTI ENUM SU MINIJAUS ATSIŲSTU SĄRAŠU
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
      translations: {
        lt: {
          type: String,
          required: true,
        },
        en: {
          type: String,
          required: true,
        },
      },
      required: false,
    },
    // automobilio varomieji ratai
    // REIKIA SUTIKRINTI ENUM SU MINIJAUS ATSIŲSTU SĄRAŠU
    drivingWheels: {
      type: String,
      enum: ["front", "rear", "all", "four"],
      translations: {
        lt: {
          type: String,
          required: true,
        },
        en: {
          type: String,
          required: true,
        },
      },
      required: false,
    },
    // ardomo automobilio nuotraukų masyvas
    photoUrls: [
      {
        type: String,
        required: false,
      },
    ],
    // ardomo automobilio dalių masyvas
    parts: [
      {
        // dalies ID
        partId: {
          type: Schema.Types.ObjectId,
          ref: "Part",
        },
        // dalies pavadinimas
        name: {
          type: String,
          required: true,
        },
        required: false,
      },
    ],
  },
  { timestamps: true }
);

module.exports = {
  Car: mongoose.model("Car", carSchema),
  carSchema: carSchema,
};
