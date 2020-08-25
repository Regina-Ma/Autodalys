const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Address = mongoose.model(
  "Address",
  new Schema({
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipCode: {
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
  })
);

const personContactsModel = Address.discriminator(
  "Person Contacts",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },

    isVATPayer: {
      type: Boolean,
      required: true,
    },
    VAT: {
      type: String,
      required: () => this.isVATPayer,
    },
  })
);

const companyContactsModel = Address.discriminator(
  "Company Contacts",
  new Schema({
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: "Seller",
      required: false,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyCode: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isVATPayer: {
      type: Boolean,
      required: true,
    },
    VAT: {
      type: String,
      required: () => this.isVATPayer,
    },
  })
);

module.exports = mongoose.model("Address", Address);
module.exports = mongoose.model("Person Contacts", personContactsModel);
module.exports = mongoose.model("Company Contacts", companyContactsModel);
