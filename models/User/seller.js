const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sellerSchema = new Schema(
  {
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
    isVATPayer: {
      type: Boolean,
      required: true,
    },
    VAT: {
      type: String,
      required: () => this.isVATPayer,
    },
    companyName: {
      type: String,
      required: () => this.legalEntity === "company",
    },
    companyCode: {
      type: String,
      required: () => this.legalEntity === "company",
    },
    companyRepresentativeName: {
      type: String,
      required: () => this.legalEntity === "company",
    },
    companyRepresentativeSurname: {
      type: String,
      required: () => this.legalEntity === "company",
    },
    personName: {
      type: String,
      required: () => this.legalEntity === "person",
    },
    personSurname: {
      type: String,
      required: () => this.legalEntity === "person",
    },
    personCommerceCode: {
      type: String,
      required: () => this.legalEntity === "person",
    },

    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
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
    logoUrl: {
      type: String,
      required: false,
    },
    workingTime: [
      {
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
        workingHours: {
          type: String,
          required: false,
        },
      },
    ],
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ratings: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: false,
        },
        orderId: {
          type: Schema.Types.ObjectId,
          ref: "Order",
          required: false,
        },
        ratingTime: {
          type: Date,
          required: false,
        },
        rating: {
          type: Number,
          required: false,
          min: 0,
          max: 5,
        },
      },
    ],
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
    ratingsCount: {
      type: Number,
      required: false,
      default: this.totalRating / this.ratings.length,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Seller", sellerSchema);
