const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companySchema = new Schema({
  company_name: {
    type: String,
    required: true,
  },
  company_code: {
    type: String,
    required: true,
  },
  VAT_code: {
    type: String,
    required: true,
  },
  company_phone: {
    type: String,
    required: true,
  },
  company_email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip_code: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    enum: ["EUR", "USD"],
    required: true,
  },
  working_hours: {
    type: String,
    required: false,
  },
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Company", companySchema);
