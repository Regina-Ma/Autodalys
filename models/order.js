const mongoose = require("mongoose");
const partSchema = require("./Car/part");

const Schema = mongoose.Schema;

// užsakymo schema
const orderSchema = new Schema(
  {
    // užsakymo pirkėjo ID
    buyerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // užsakymo sukūrimo data ir laikas
    orderCreated: {
      type: Date,
      required: true,
    },
    // pirkėjo užsakytų detalių iš pardavėjų masyvas
    items: [
      {
        // užsakytos detalės pardavėjo ID
        sellerId: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "User",
        },
        // užsakytų detalių masyvas
        parts: [
          {
            // užsakyta detalė
            part: partSchema,
            // užsakytos detalės kiekis
            quantity: {
              type: Number,
              required: true,
              default: 1,
            },
          },
        ],
      },
    ],
    // bendras užsakytų detalių kiekis
    totalItemsQuantity: {
      type: Number,
      required: true,
      default: function () {
        return this.items.reduce(function (cnt, o) {
          return cnt + o.quantity;
        }, 0);
      },
    },
    // bendra užsakytų detalių kaina
    totalItemsPrice: {
      type: Number,
      required: true,
    },
    // bendra užsakytų detalių kaina be PVM
    totalItemsPriceWithoutVAT: {
      type: Number,
      required: true,
      default: function () {
        return this.totalItemsPrice / 1.21;
      },
    },
    // užsakymo pristatymo būdas
    deliveryType: {
      type: String,
      enum: ["pick-up", "courier"],
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
      required: true,
    },
    // užsakymo pristatymo adresas
    deliverTo: {
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
    // pristatymui pasirinktas kurjeris
    courier: {
      type: String,
      enum: ["dpd", "post"],
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
      required: true,
    },
    // pristatymo kaina
    deliveryPrice: {
      type: Number,
      required: true,
    },
    // bendra užsakymo kaina
    totalPrice: {
      type: Number,
      required: true,
      default: function () {
        return this.totalItemsPrice + this.deliveryPrice;
      },
    },
    // bendra užsakymo kaina be PVM
    totalPriceWithoutVAT: {
      type: Number,
      required: true,
      default: function () {
        return this.totalPrice / 1.21;
      },
    },
    // mokėjimo būdas
    paymentType: {
      type: String,
      enum: ["mangopay", "paysera"],
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
      required: true,
    },
    // mokėjimo būsena
    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid"],
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
      required: true,
    },
    // įcykusio apmokėjimo data ir laiaks
    paymentTime: {
      type: Date,
      required: true,
    },
    // užsakymo statuso pasikeitimų masyvas
    statusLog: [
      {
        // užsakymo statusas
        status: {
          type: String,
          enum: ["unpaid", "paid", "processing", "shipped", "delivered"],
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
          required: true,
        },
        // statuso pasikeitimo data ir laikas
        statusChangeTime: {
          type: Date,
          required: true,
        },
      },
    ],
    // ar užsakymas įvertintas
    isRated: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = {
  Order: mongoose.model("Order", orderSchema),
  orderSchema: orderSchema,
};
