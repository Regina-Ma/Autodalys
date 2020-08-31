const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// automobilio variklio schema
const engineSchema = new Schema(
  {
    // automobilio variklio pavadinimas
    engine: {
      type: String,
      required: true,
    },
    // automobilio variklio gamybos pradžios metai
    productionStart: {
      type: String,
      required: true,
    },
    // automobilio variklio gamybos pabaigos metai
    productionEnd: {
      type: String,
      required: true,
    },
    // automobilio variklio galimų modelių masyvas, sudarytas iš tų modelių ID
    models: [
      {
        type: Schema.Types.ObjectId,
        ref: "Model",
      },
    ],
    // automobilio variklio galingumas kW
    power: {
      type: Number,
      required: true,
    },
    // automobilio variklio tūris cm3
    capacity: {
      type: Number,
      required: true,
    },
    // automobilio variklio kuro tipas
    // REIKIA SUTIKRINTI ENUM SU MINIJAUS ATSIŲSTU SĄRAŠU
    fuelType: {
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
      required: true,
    },
    // automobilio variklio pardavėjų ardomų automobilių masyvas, sudarytas iš tų automobilių ID
    cars: [
      {
        type: Schema.ObjectId,
        ref: "Car",
      },
    ],
  },
  { timestamps: true }
);

// metodas, grąžinantis pilną variklio pavadinimą (pavadinimas su gaminimo pradžios ir pabaigos metais)
engineSchema.method("engineFullName", function () {
  return `${this.engine} (${this.productionStart} - ${this.productionEnd})`;
});

module.exports = {
  Engine: mongoose.model("Engine", engineSchema),
};
