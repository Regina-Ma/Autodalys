const mongoose = require("mongoose");
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
      ref: "Seller",
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
          required: () => this.legalEntity === "person",
        },
        companyContacts: {
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
          required: () => this.legalEntity === "company",
        },
        address: {
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
    favorites: {
      items: [
        {
          part: partSchema,
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
      totalItemsPrice: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
