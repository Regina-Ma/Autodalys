const mongoose = require("mongoose");

const sellerSchema = require("./User/seller");
const partSchema = require("./Car/part");

const Schema = mongoose.Schema;

// sąskaitos faktūros schema
const invoiceSchema = new Schema(
  {
    // užsakymo pirkėjo ID
    buyerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    buyerAddress: {
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
    },
    // parduotos detalės pardavėjo ID
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // detalės pardavėjas
    seller: sellerSchema, // ar tik ref su denormalized?
    // pardavėjo adresas
    sellerAddress: {
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
    },
    // užsakymo, už kurį sukurta sąskaita, ID
    order: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    // sąskaitos faktūros data
    invoiceDate: {
      type: Date,
      required: true,
    },
    // sąskaitos faktūros numeris
    invoiceNumber: {
      // seller code + number
      type: String,
      required: true,
    },
    // nupirktų detalių masyvas
    items: [
      {
        // detalė
        part: partSchema,
        // kiekis
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    // bendras detalių kiekis
    totalItemsQuantity: {
      type: Number,
      required: true,
      default: function () {
        return this.items.reduce(function (cnt, o) {
          return cnt + o.quantity;
        }, 0);
      },
    },
    // bendra detalių kaina
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
    // pristatymo kaina
    deliveryPrice: {
      type: Number,
      required: true,
    },
    // bendra sąskaitos faktūros suma
    totalPrice: {
      type: Number,
      required: true,
      default: function () {
        return this.totalItemsPrice + this.deliveryPrice;
      },
    },
    // bendra sąskaitos faktūros suma be PVM
    totalPriceWithoutVAT: {
      type: Number,
      required: true,
      default: function () {
        return this.totalPrice / 1.21;
      },
    },
  },
  { timestamps: true }
);

module.exports = {
  Invoice: mongoose.model("Invoice", invoiceSchema),
  invoiceSchema: invoiceSchema,
};
