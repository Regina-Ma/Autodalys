const mongoose = require("mongoose");
const addressSchema = require("./address");
const partSchema = require("./Car/part");

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "buyer", "seller"],
    required: true,
  },
  type: {
    type: String,
    enum: ["person", "company"],
    required: true,
  },
  contacts: {
    name: {
      type: String,
      required: () => this.type === "person",
    },
    surname: {
      type: String,
      required: () => this.type === "person",
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: () => this.type === "company",
    },
    companyName: {
      type: String,
      ref: "Company",
      required: () => this.type === "company",
    },
    companyCode: {
      type: String,
      ref: "Company",
      required: () => this.type === "company",
    },
    phone: {
      type: String,
      required: true,
    },
    VAT: {
      type: String,
      ref: "Company",
      required: () => this.type === "company",
    },
    addresses: {
      billingAddresses: [
        {
          name: {
            type: String,
            required: () => this.type === "person",
          },
          surname: {
            type: String,
            required: () => this.type === "person",
          },
          companyName: {
            type: String,
            required: () => this.type === "company",
          },
          companyCode: {
            type: String,
            required: () => this.type === "company",
          },
          phone: {
            type: String,
            required: true,
          },
          address: [addressSchema],
        },
      ],
      shippingAddresses: [
        {
          name: {
            type: String,
            required: () => this.type === "person",
          },
          surname: {
            type: String,
            required: () => this.type === "person",
          },
          companyName: {
            type: String,
            required: () => this.type === "company",
          },
          companyCode: {
            type: String,
            required: () => this.type === "company",
          },
          phone: {
            type: String,
            required: true,
          },
          address: [addressSchema],
        },
      ],
    },
  },
  cart: {
    items: [
      {
        part: partSchema,
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
});

module.exports = mongoose.model("User", userSchema);
