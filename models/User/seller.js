const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// pardavėjo kontaktinės informacijos schema
const sellerSchema = new Schema(
  {
    // pardavėjo tipas - fizinis ar juridinis asmuo
    legalEntity: {
      type: String,
      enum: ["person", "company"],
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
    // ar pardavėjas yra PVM mokėtojas
    isVATPayer: {
      type: Boolean,
      required: true,
    },
    // PVM kodas
    VAT: {
      type: String,
      required: () => this.isVATPayer,
    },
    // pardavėjo - įmonės - pavadinimas
    companyName: {
      type: String,
      required: () => this.legalEntity === "company",
    },
    // pardavėjo - įmonės - kodas
    companyCode: {
      type: String,
      required: () => this.legalEntity === "company",
    },
    // pardavėjo - įmonės - atstovo vardas
    companyRepresentativeName: {
      type: String,
      required: () => this.legalEntity === "company",
    },
    // pardavėjo - įmonės - atstovo pavardė
    companyRepresentativeSurname: {
      type: String,
      required: () => this.legalEntity === "company",
    },
    // pardavėjo - fizinio asmens - vardas
    personName: {
      type: String,
      required: () => this.legalEntity === "person",
    },
    // pardavėjo - fizinio asmens - pavardė
    personSurname: {
      type: String,
      required: () => this.legalEntity === "person",
    },
    // pardavėjo - fizinio asmens - individualios veiklos pažymos numeris
    personCommerceCode: {
      type: String,
      required: () => this.legalEntity === "person",
    },
    // pardavėjo telefonas
    phone: {
      type: String,
      required: true,
    },
    // pardavėjo email
    email: {
      type: String,
      required: true,
    },
    // pardavėjo adresas (gatvė, namas, butas)
    addressString: {
      type: String,
      required: false,
    },
    // pardavėjo miestas
    city: {
      type: String,
      required: false,
    },
    // pardavėjo pašto indeksas
    zipCode: {
      type: String,
      required: false,
    },
    // pardavėjo apskritis
    region: {
      type: String,
      required: false,
    },
    // pardavėjo šalis
    country: {
      type: String,
      required: false,
    },
    // pardavėjo logotipas
    logoUrl: {
      type: String,
      required: false,
    },
    // pardavėjo darbo valandų masyvas
    workingTime: [
      {
        // diena
        day: {
          type: String,
          enum: [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
          ],
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
          required: false,
        },
        // darbo valandos
        workingHours: {
          type: String,
          required: false,
        },
      },
    ],
    // pardavėjo vartotojo ID
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // pardavėjo įvertinimų (reitingų) masyvas
    ratings: [
      {
        // pardavėją įvertinusio vartotojo ID
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: false,
        },
        // pardavėjo įvertinimo užsakymo ID
        orderId: {
          type: Schema.Types.ObjectId,
          ref: "Order",
          required: false,
        },
        // pardavėjo įvertinimo data ir laikas
        ratingTime: {
          type: Date,
          required: false,
        },
        // pardavėjo įvertinimas nuo 1 iki 5
        rating: {
          type: Number,
          required: false,
          min: 1,
          max: 5,
        },
      },
    ],
    // bendras aprdavėjo įvertinimas
    overallRating: {
      type: Number,
      required: false,
      min: 0,
      max: 5,
      default: function () {
        return (
          this.ratings.reduce(function (cnt, o) {
            return cnt + o.rating;
          }, 0) / this.ratings.length
        );
      },
    },
    // bendras pardavėjo įvertinimų skaičius
    ratingsCount: {
      type: Number,
      required: false,
      default: this.totalRating / this.ratings.length,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Seller", sellerSchema);
