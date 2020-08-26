const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const partNamesSchema = new Schema({
  partName: {
    type: String,
    required: true,
  },
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

const subcategorySchema = new Schema({
  subcategoryName: {
    type: String,
    required: true,
  },
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
  partNames: [partNamesSchema],
});

// kategorijos schema
const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
  },
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
  iconUrl: {
    type: String,
    required: true,
  },
  subcategories: [subcategorySchema],
});

module.exports = mongoose.model("Category", categorySchema);
