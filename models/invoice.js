const mongoose = require("mongoose");

const sellerSchema = require("./User/seller");
const partSchema = require("./Car/part");

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  buyerAddress: {
    // UŽPILDYTI ADRESO LAUKUS VISUS
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  seller: sellerSchema, // ar tik ref su denormalized?
  sellerAddress: {
    // UŽPILDYTI ADRESO LAUKUS VISUS
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  invoiceDate: {
    type: Date,
    required: true,
  },
  invoiceNumber: {
    // seller code + number
    type: String,
    required: true,
  },
  items: [
    {
      part: partSchema,
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  totalItemsQuantity: {
    type: Number,
    required: true,
    default: function () {
      return this.items.reduce(function (cnt, o) {
        return cnt + o.quantity;
      }, 0);
    },
  },
  totalItemsPrice: {
    type: Number,
    required: true,
  },
  totalItemsPriceWithoutVAT: {
    type: Number,
    required: true,
    default: function () {
      return this.totalItemsPrice / 1.21;
    },
  },
  deliveryPrice: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: function () {
      return this.totalItemsPrice + this.deliveryPrice;
    },
  },
  totalPriceWithoutVAT: {
    type: Number,
    required: true,
    default: function () {
      return this.totalPrice / 1.21;
    },
  },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
