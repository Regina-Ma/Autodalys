const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const languageSchema = new Schema({
  otherLanguages: [
    {
      type: String,
      enum: ["lt", "en", "ru"],
      required: true,
    },
  ],
  languageName: {
    type: String,
    required: true,
  },
  // frontiniai puslapiai
  landingPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  registrationTypeWindow: {
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  registerAsBuyerPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  registerAsSellerPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  loginPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  contactsPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  aboutUsPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  becomeSellerPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  paymentsPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  deliveryPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  returnsPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  faqPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  searchPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  advertisementPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  singleCarAdvertisementPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  privacyPolicyPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  pageRulesPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  savedPartsPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  cartPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  buyingProcessPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: true,
      max: 160,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  // vartotojų panelės puslapiai
  profileSettingsBuyerPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  registeredBecomeSellerPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  boughtOrdersPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  returnPartsPage: {
    url: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    pageFields: [
      {
        type: Map,
        of: String,
      },
    ],
  },

  // dar reikia papildyti

  // el. laiškų šablonai
  verifyUserEmailTemplate: {
    senderEmail: {
      type: String,
      lowercase: true,
      required: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
    },
    sanderName: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    emailBody: {
      type: String,
      required: true,
    },
  },
  resetPasswordTemplate: {
    senderEmail: {
      type: String,
      lowercase: true,
      required: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
    },
    sanderName: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    emailBody: {
      type: String,
      required: true,
    },
  },
  // detalės kategorijos, subkategorijos ir pavadinimai
  partCategorization: {
    partCategories: [
      {
        type: Map,
        of: String,
      },
    ],
    partSubcategories: [
      {
        type: Map,
        of: String,
      },
    ],
    partNames: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  // filtrų reikšmės
  carEnums: {
    fuelType: [
      {
        type: Map,
        of: String,
      },
    ],
    color: [
      {
        type: Map,
        of: String,
      },
    ],
    steeringWheelPosition: [
      {
        type: Map,
        of: String,
      },
    ],
    transmission: [
      {
        type: Map,
        of: String,
      },
    ],
    bodyType: [
      {
        type: Map,
        of: String,
      },
    ],
    drivingWheels: [
      {
        type: Map,
        of: String,
      },
    ],
  },
  partEnums: {
    condition: [
      {
        type: Map,
        of: String,
      },
    ],
    position: [
      {
        type: Map,
        of: String,
      },
    ],
  },
});

module.exports = mongoose.model("Language", languageSchema);
