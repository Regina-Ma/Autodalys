const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// kategorijos schema
const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
  },
  translations: [
    {
      lt: {
        type: String,
        required: true,
      },
      en: {
        type: String,
        required: true,
      },
    },
  ],
  iconUrl: {
    type: String,
    required: true,
  },
  subcategories: [
    {
      subcategoryName: {
        type: String,
        required: true,
      },
      translations: [
        {
          lt: {
            type: String,
            required: true,
          },
          en: {
            type: String,
            required: true,
          },
        },
      ],
      partNames: [
        {
          partName: {
            type: String,
            required: true,
          },
          translations: [
            {
              lt: {
                type: String,
                required: true,
              },
              en: {
                type: String,
                required: true,
              },
            },
          ],
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Category", categorySchema);
