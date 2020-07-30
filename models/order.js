const mongoose = require("mongoose");
const partSchema = require("./Car/part");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  buyerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  orderCreated: {
    type: Date,
    required: true,
  },
  items: [
    {
      sellerId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
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
  paymentType: {
    type: String,
    enum: ["paypal", "paysera"],
    required: true,
  },
  orderStatus: {
    type: String,
    enum: ["unpaid", "paid", "processing", "shipped", "delivered"],
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
