const mongoose = require("mongoose");

const Schema = mongoose.Schema;

function engineName(engine, start, end) {
  return `${engine} (${start} - ${end})`;
}

const powerSchema = new Schema({
  kWh: {
    type: Number,
    required: true,
  },
  hp: {
    type: Number,
    required: true,
  },
});

const engineSchema = new Schema(
  {
    engine: {
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
    engineFullName: {
      type: String,
      get: engineName(this.engine, this.productionStart, this.productionEnd),
      required: true,
    },
    models: [
      {
        type: Schema.Types.ObjectId,
        ref: "Model",
      },
    ],
    power: {
      type: powerSchema,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
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
      required: true,
    },
    cars: [
      {
        type: Schema.ectId,
        ref: "Car",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Engine", engineSchema);
module.exports = mongoose.model("Power", powerSchema);
