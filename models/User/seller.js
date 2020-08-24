const mongoose = require("mongoose");
const addressModel = require("./contacts");

const Schema = mongoose.Schema;

const sellerSchema = new Schema(
  {
    legalEntity: {
      type: String,
      enum: ["person", "company"],
      required: true,
    },
    isVATPayer: {
      type: Boolean,
      required: true,
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
    VAT: {
      type: String,
      required: () => this.isVATPayer,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: addressModel,
    logoUrl: {
      type: String,
      required: true,
    },
    workingTime: [
      {
        day: {
          type: String,
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
          required: true,
        },
        orderId: {
          type: Schema.Types.ObjectId,
          ref: "Order",
          required: true,
        },
        ratingTime: {
          type: Date,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 0,
          max: 5,
        },
      },
    ],
    overallRating: {
      type: Number,
      required: true,
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
      required: true,
      default: this.totalRating / this.ratings.length,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Seller", sellerSchema);
