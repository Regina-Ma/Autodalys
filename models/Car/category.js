const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// detalės pavadinimo schema
const partNamesSchema = new Schema({
  // detalės pavadinimas
  partName: {
    type: String,
    required: true,
  },
  // detalės pavadinimo vertimai
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
});

// detalės subkategorijos schema
const subcategorySchema = new Schema({
  // detalės subkategorijos pavadinimas
  subcategoryName: {
    type: String,
    required: true,
  },
  // detalės subkategorijos vertimai
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
  // detalės subkategorijos pavadinimų masyvas
  partNames: [partNamesSchema],
});

// detalės kategorijos schema
const categorySchema = new Schema({
  // detalės kategorijos pavadinimas
  categoryName: {
    type: String,
    required: true,
  },
  // detalės kategorijos vertimai
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
  // detalės kategorijos ikona
  iconUrl: {
    type: String,
    required: true,
  },
  // detalės ategorijos subkategorijų masyvas
  subcategories: [subcategorySchema],
});

module.exports = mongoose.model("Category", categorySchema);
