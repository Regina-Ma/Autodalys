const mongoose = require("mongoose");
const partSchema = require("./Car/part");

const Schema = mongoose.Schema;

// vartotojo schema
const userSchema = new Schema(
  {
    // ar vartotojas yra registruotas
    isUserRegistered: {
      type: Boolean,
      required: true,
    },
    // vartotojo email
    email: {
      type: String,
      lowercase: true,
      required: [() => this.isUserRegistered === true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      unique: true,
      index: true,
    },
    // vartotojo slaptažodis
    password: {
      type: String,
      required: [() => this.isUserRegistered === true, "can't be blank"],
    },
    // ar vartotojas patvirtino savo email
    isVerified: {
      type: Boolean,
      required: () => this.isUserRegistered === true,
    },
    // vartotojo verify token
    verifyToken: {
      type: String,
      required: false,
    },
    // vartotojo slaptažodžio keitimo token
    passwordResetToken: {
      type: String,
      required: false,
    },
    // vartotojo rolė
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
    // jeigu vartotojas yra pardavėjas, jo kontaktinės informacijos ID
    sellerInfoId: {
      type: Schema.Types.ObjectId,
      ref: "Seller",
      required: () => this.role === "seller",
    },
    // registruoto vartotojo išsaugoti adresai
    savedAddresses: [
      {
        // išsaugoto adreso pavadinimas
        addressName: {
          type: String,
          required: false,
        },
        // gavėjo tipas - fizinis ar juridinis asmuo
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
        // gavėjo vardas
        name: {
          type: String,
          required: false,
        },
        // gavėjo pavardė
        surname: {
          type: String,
          required: false,
        },
        // gavėjo telefonas
        phone: {
          type: String,
          required: false,
        },
        // gavėjo - įmonės - pavadinimas
        companyName: {
          type: String,
          required: false,
        },
        // gavėjo - įmonės - kodas
        companyCode: {
          type: String,
          required: false,
        },
        // ar gavėjas yra PVM mokėtojas
        isVATPayer: {
          type: Boolean,
          required: false,
        },
        // gavėjo PVM kodas
        VAT: {
          type: String,
          required: () => this.isVATPayer,
        },
        // gavimo adresas (gatvės pavadinimas, namas, butas)
        addressString: {
          type: String,
          required: false,
        },
        // gavimo miestas
        city: {
          type: String,
          required: false,
        },
        // gavimo pašto indeksas
        zipCode: {
          type: String,
          required: false,
        },
        // gavimo apskritis
        region: {
          type: String,
          required: false,
        },
        // gavimo šalis
        country: {
          type: String,
          required: false,
        },
        // komentaras kurjeriui
        comment: {
          type: String,
          required: false,
        },
      },
    ],
    // registruoto vartotojo prekių krepšelis
    cart: {
      // prekių krepšelyje masyvas
      items: [
        {
          // detalė
          part: partSchema,
          // kiekis
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
      // bendras prekių kiekis
      totalItemsQuantity: {
        type: Number,
        required: true,
        default: function () {
          return this.cart.items.reduce(function (cnt, o) {
            return cnt + o.quantity;
          }, 0);
        },
      },
      // bendra prekių kaina
      totalItemsPrice: {
        type: Number,
        required: true,
      },
    },
    // registruoto vartotojo išsaugotos prekės (favorites)
    favorites: {
      // išsaugotų detalių masyvas
      items: [
        {
          // detalė
          part: partSchema,
        },
      ],
      // bendra prekių kaina
      totalItemsPrice: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
