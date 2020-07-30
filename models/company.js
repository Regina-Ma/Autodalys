const mongoose = require("mongoose");
const addressSchema = require("./address");

const Schema = mongoose.Schema;

const companySchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyCode: {
    type: String,
    required: true,
  },
  VAT: {
    type: String,
    required: true,
  },
  companyPhone: {
    type: String,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
  },
  address: addressSchema,
  logoURL: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    enum: ["EUR", "USD"],
    required: true,
  },
  workingHours: {
    type: String,
    required: false,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Company", companySchema);
