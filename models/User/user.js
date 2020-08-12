const mongoose = require("mongoose");
const addressSchema = require("./contacts");
const personContactsSchema = require("./contacts");
const companyContactsSchema = require("./contacts");
const partSchema = require("./Car/part");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    isUserRegistered: {
      type: Boolean,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [() => this.isUserRegistered === true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: [() => this.isUserRegistered === true, "can't be blank"],
    },
    isVerified: {
      type: Boolean,
      required: () => this.isUserRegistered === true,
    },
    verifyToken: {
      type: String,
      required: false,
    },
    passwordResetToken: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ["admin", "buyer", "seller"],
      default: "buyer",
      required: () => this.isUserRegistered === true,
    },
    sellerInfoId: {
      type: Schema.Types.ObjectId,
      ref: Seller,
      required: () => this.role === "seller",
    },
    legalEntity: {
      type: String,
      enum: ["person", "company"],
      required: false,
    },
    contacts: [
      {
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
    ],
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
      totalItemsQuantity: {
        type: Number,
        required: true,
        default: function () {
          return this.cart.items.reduce(function (cnt, o) {
            return cnt + o.quantity;
          }, 0);
        },
      },
      totalItemsPrice: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
