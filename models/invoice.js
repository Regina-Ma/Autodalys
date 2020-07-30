const mongoose = require("mongoose");

const userSchema = require("./user");
const orderSchema = require("./order");
const partSchema = require("./Car/part");

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  buyerId: userSchema,
  sellerId: userSchema,
  orderId: orderSchema,
  invoiceDate: {
    type: Date,
    required: true,
  },
  items: [
    {
      part: partSchema,
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalItemsQuantity: {
    type: Number,
    required: true,
  },
  totalItemsPrice: {
    type: Number,
    required: true,
  },
  totalItemsPriceVAT: {
    type: Number,
    required: true,
  },
  courier: {
    type: String,
    enum: ["dpd", "post"],
    required: true,
  },
  deliveryPrice: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  totalPriceVAT: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
