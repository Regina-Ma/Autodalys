const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
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
      partId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Part",
      },
      price: {
        type: Number,
        required: true,
      },
      priceVAT: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  paymentType: {
    type: String,
    enum: ["paypal", "paysera"],
    required: true,
  },
  status: {
    type: String,
    enum: ["unpaid", "paid", "processing", "shipped", "delivered"],
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
