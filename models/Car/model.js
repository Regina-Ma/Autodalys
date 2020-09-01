const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// automobilio modelio schema
const modelSchema = new Schema({
  // automobilio markė, kuriai "priklauso" šis modelis
  make: {
    makeID: {
      type: Schema.Types.ObjectId,
      ref: "Make",
    },
    makeName: {
      type: String,
      required: true,
    },
  },
  // automobilio modelio pavadinimas
  model: {
    type: String,
    required: true,
  },
  // automobolio modelio pilnas pavadinimas su gamybos pradžios ir pabaigos metais)
  // panaudojamas metodas modelFullName
  modelFullName: {
    type: String,
    required: true,
  },
  // automobilio modelio gamybos pradžios metai
  productionStart: {
    type: String,
    required: true,
  },
  // automobilio modelio gamybos pabaigos metai
  productionEnd: {
    type: String,
    required: true,
  },
  // automobilio modelio galimų variklių masyvas, sudarytas iš tų variklių ID
  engines: [
    {
      type: Schema.Types.ObjectId,
      ref: "Engine",
    },
  ],
  // automobilio modelio pardavėjų ardomų automobilių masyvas, sudarytas iš tų automobilių ID
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
});

// metodas, grąžinantis pilną modelio pavadinimą (pavadinimas su gaminimo pradžios ir pabaigos metais)
modelSchema.method("modelFullName", function modelName() {
  return `${this.make} ${this.model} (${this.start} - ${this.end})`;
});

module.exports = {
  Model: mongoose.model("Model", modelSchema),
  modelSchema: modelSchema,
};
