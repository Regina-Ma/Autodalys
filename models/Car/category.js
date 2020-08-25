const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// kategorijos schema
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  iconUrl: {
    type: String,
    required: true,
  },
  subcategories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subcategory",
    },
  ],
});

const subcategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    categoryID: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    categoryName: {
      type: String,
      required: true,
    },
  },
  partNames: [
    {
      type: Schema.Types.ObjectId,
      ref: "PartNames",
    },
  ],
});

const partNamesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subcategory: {
    subcategoryID: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    subcategoryName: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("Category", categorySchema);
module.exports = mongoose.model("Subcategory", subcategorySchema);
module.exports = mongoose.model("PartName", partNamesSchema);
