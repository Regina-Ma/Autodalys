const mongoose = require("mongoose");
const partSchema = require("./Car/part");
const buyerSchema = require("./User/buyer");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
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
  deliveryType: {
    type: String,
    enum: ["pick-up", "courier"],
    required: true,
  },
  deliverTo: {
    personContacts: {
      type: personContactsSchema,
      required: () => this.legalEntity === "person",
    },
    companyContacts: {
      type: companyContactsSchema,
      required: () => this.legalEntity === "company",
    },
    address: {
      type: addressSchema,
      required: true,
    },
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
  paymentType: {
    type: String,
    enum: ["mangopay", "paysera"],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["unpaid", "paid"],
    required: true,
  },
  paymentTime: {
    type: Date,
    required: true,
  },
  statusLog: [
    {
      status: {
        type: String,
        enum: ["unpaid", "paid", "processing", "shipped", "delivered"],
        required: true,
      },
      statusChangeTime: {
        type: Date,
        required: true,
      },
    },
  ],
  isRated: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
