const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// automobilio markės schema
const makeSchema = new Schema({
  // automobilio markės pavadinimas
  make: {
    type: String,
    required: true,
  },
  // automobilio markės logotipas
  logoUrl: {
    type: String,
    required: true,
  },
  // automobilio markės modelių masyvas, sudarytas iš tų modelių ID
  models: [
    {
      type: Schema.Types.ObjectId,
      ref: "Model",
    },
  ],
});

module.exports = {
  Make: mongoose.model("Make", makeSchema),
  makeSchema: makeSchema,
};
