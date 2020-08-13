const mongoose = require("mongoose");
const carSchema = require("./car");
const powerSchema = require("./engine");

const Schema = mongoose.Schema;

// kategorijos schema
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

// detalės schema
const partSchema = new Schema({
  // detalės unikalus kodas (SKU)
  productCode: {
    type: String,
    required: true,
    unique: true,
  },

  // detalės kategorija
  category: {
    type: categorySchema,
    required: true,
    unique: true,
  },

  // detalės subkategorija
  subCategory: categorySchema.add({
    subCategory: {
      type: categorySchema,
      required: true,
      unique: true,
    },
  }),

  // detalės gamintojo kodų masyvas
  codes: [
    {
      type: String,
      required: true,
    },
  ],

  // automobilis, iš kurio paimta detalė
  car: {
    // jeigu detalė yra iš pardavėjo įvesto ardomo automobilio - to automobilio ID
    // tokiu atveju likusieji laukai užpildomi iš to automobilio
    carId: {
      type: carSchema,
      required: false,
      unique: true,
    },

    // automobilio markė
    make: {
      type: String,
      required: false,
    },

    // automobilio modelis
    model: {
      type: String,
      required: false,
    },

    // automobilio variklio modelio ID, jei žinomas
    engine: {
      type: Schema.Types.ObjectId,
      ref: "Engine",
    },

    // automobilio variklio tūris (kubiniais centimetrais - cm3)
    engineCapacity: {
      type: Number,
      required: false,
    },

    // automobilio variklio galingumas
    enginePower: {
      type: powerSchema,
      required: false,
    },

    // automobilio kuro tipas, pasirenkamas iš sąrašo
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

    // automobilio pagaminimo metai
    carProductionYear: {
      type: String,
      required: false,
    },

    // automobilio vairo padėtis, pasirenkama iš sąrašo
    steeringWheelPosition: {
      type: String,
      enum: ["left", "right"],
      required: false,
    },

    // automobilio pavarų dėžės tipas, pasirenkamas iš sąrašo
    transmission: {
      type: String,
      enum: ["manual", "automatic"],
      required: false,
    },

    // automobilio kėbulo tipas, pasirenkamas iš sąrašo
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

    // automobilio varomieji ratai, pasirenkama iš sąrašo
    drivingWheels: {
      type: String,
      enum: ["front", "rear", "all"],
      required: false,
    },

    // automobilio kėbulo spalva, pasirenkama iš sąrašo
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

  // detalės pavadinimas
  name: {
    type: String,
    required: true,
  },

  // detalės pozicija, pasirenkama iš sąrašo
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

  // detalės aprašymas, kurį įveda pardavėjas
  description: {
    type: String,
    required: true,
  },

  // detalės kaina be PVM, kuri paskaičiuojama iš pardavėjo įvestos kainos
  priceWithoutVAT: {
    type: Number,
    required: true,
    default: function () {
      return this.price / 1.21;
    },
  },

  // detalės kaina, kurią įveda pardavėjas
  price: {
    type: Number,
    required: true,
  },

  // detalės nuotraukų, kurias įkelia pardavėjas, nuorodų masyvas
  photoUrls: [
    {
      type: String,
      required: false,
    },
  ],

  // detalės būklė, pasirenkama iš sąrašo
  condition: {
    type: String,
    enum: ["new", "used", "refurbished"],
    required: true,
  },

  // detalės prieinamumo pirkėjui tipas, pasirenkamas iš sąrašo
  status: {
    type: String,
    enum: ["unavailable", "available", "reserved", "sold"],
    required: true,
  },

  // detalės matmenų objektas
  dimensions: {
    // detalės plotis
    width: {
      type: Number,
      required: true,
    },

    // detalės ilgis
    length: {
      type: Number,
      required: true,
    },

    // detalės aukštis
    height: {
      type: Number,
      required: true,
    },
  },

  // detalės svoris
  weight: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Part", partSchema);
