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
      // ar reikia vertimų rolei??
      translations: {
        lt: {
          type: String,
          required: true,
        },
        en: {
          type: String,
          required: true,
        },
      },
      default: "buyer",
      required: () => this.isUserRegistered === true,
    },
    sellerInfoId: {
      type: Schema.Types.ObjectId,
      ref: "Seller",
      required: () => this.role === "seller",
    },
    savedAddresses: [
      {
        addressName: {
          type: String,
          required: false,
        },
        legalEntity: {
          type: String,
          enum: ["person", "company"],
          translations: {
            lt: {
              type: String,
              required: false,
            },
            en: {
              type: String,
              required: false,
            },
          },
          required: false,
        },
        name: {
          type: String,
          required: false,
        },
        surname: {
          type: String,
          required: false,
        },
        phone: {
          type: String,
          required: false,
        },
        companyName: {
          type: String,
          required: false,
        },
        companyCode: {
          type: String,
          required: false,
        },
        isVATPayer: {
          type: Boolean,
          required: false,
        },
        VAT: {
          type: String,
          required: () => this.isVATPayer,
        },
        addressString: {
          type: String,
          required: false,
        },
        city: {
          type: String,
          required: false,
        },
        zipCode: {
          type: String,
          required: false,
        },
        region: {
          type: String,
          required: false,
        },
        country: {
          type: String,
          required: false,
        },
        comment: {
          type: String,
          required: false,
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
