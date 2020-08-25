const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const languageSchema = new Schema(
  {
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
    // -------- navigacijos komponentai --------
    topNavigation: {
      pageFields: {
        savedParts: {
          type: String,
          required: true,
        },
        contacts: {
          type: String,
          required: true,
        },
        login: {
          type: String,
          required: true,
        },
        register: {
          type: String,
          required: true,
        },
      },
    },
    sideNavigationFront: {
      pageFields: {
        delivery: {
          type: String,
          required: true,
        },
        returns: {
          type: String,
          required: true,
        },
        payments: {
          type: String,
          required: true,
        },
        pageRules: {
          type: String,
          required: true,
        },
        privacyPolicy: {
          type: String,
          required: true,
        },
        aboutUs: {
          type: String,
          required: true,
        },
        becomeSeller: {
          type: String,
          required: true,
        },
        contacts: {
          type: String,
          required: true,
        },
        faq: {
          type: String,
          required: true,
        },
      },
    },
    footer: {
      pageFields: {
        delivery: {
          type: String,
          required: true,
        },
        returns: {
          type: String,
          required: true,
        },
        payments: {
          type: String,
          required: true,
        },
        contacts: {
          type: String,
          required: true,
        },
        aboutUs: {
          type: String,
          required: true,
        },
        faq: {
          type: String,
          required: true,
        },
        becomeSeller: {
          type: String,
          required: true,
        },
        privacyPolicy: {
          type: String,
          required: true,
        },
        pageRules: {
          type: String,
          required: true,
        },
      },
    },
    sideNavigationAdmin: {
      pageFields: {
        sellerNavigation: {
          cars: {
            type: String,
            required: true,
          },
          parts: {
            type: String,
            required: true,
          },
          orders: {
            type: String,
            required: true,
          },
          invoices: {
            type: String,
            required: true,
          },
          queries: {
            type: String,
            required: true,
          },
          statistics: {
            type: String,
            required: true,
          },
          infoirmation: {
            type: String,
            required: true,
          },
          import: {
            type: String,
            required: true,
          },
          export: {
            type: String,
            required: true,
          },
          profileSettings: {
            type: String,
            required: true,
          },
        },
        buyerNavigation: {
          savedParts: {
            type: String,
            required: true,
          },
          cart: {
            type: String,
            required: true,
          },
          ordersBought: {
            type: String,
            required: true,
          },
          becomeSeller: {
            type: String,
            required: true,
          },
        },
        adminNavigation: {
          statistics: {
            users: {
              type: String,
              required: true,
            },
            advertisements: {
              type: String,
              required: true,
            },
            orders: {
              type: String,
              required: true,
            },
            queries: {
              type: String,
              required: true,
            },
            income: {
              type: String,
              required: true,
            },
          },
          users: {
            settings: {
              type: String,
              required: true,
            },
            carts: {
              type: String,
              required: true,
            },
            cars: {
              type: String,
              required: true,
            },
            parts: {
              type: String,
              required: true,
            },
            orders: {
              type: String,
              required: true,
            },
            invoices: {
              type: String,
              required: true,
            },
            queries: {
              type: String,
              required: true,
            },
            importsExports: {
              type: String,
              required: true,
            },
          },
          pageContent: {
            settings: {
              type: String,
              required: true,
            },
            pages: {
              type: String,
              required: true,
            },
            cars: {
              type: String,
              required: true,
            },
            parts: {
              type: String,
              required: true,
            },
            filters: {
              type: String,
              required: true,
            },
            emails: {
              type: String,
              required: true,
            },
          },
        },
      },
    },
    // -------- frontiniai puslapiai --------
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
      pageFields: {
        mainData: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        mainData: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        mainData: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        mainData: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        mainData: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        mainData: {
          type: String,
          required: true,
        },
        fomrOrderNumber: {
          type: String,
          required: true,
        },
        formEmail: {
          type: String,
          required: true,
        },
        sendFormButton: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        question1: {
          type: String,
          required: true,
        },
        answer1: {
          type: String,
          required: true,
        },
        question2: {
          type: String,
          required: true,
        },
        answer2: {
          type: String,
          required: true,
        },
        question3: {
          type: String,
          required: true,
        },
        answer3: {
          type: String,
          required: true,
        },
        question4: {
          type: String,
          required: true,
        },
        answer4: {
          type: String,
          required: true,
        },
        question5: {
          type: String,
          required: true,
        },
        answer5: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        mainData: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        mainData: {
          type: String,
          required: true,
        },
      },
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
    // -------- vartotojų panelės puslapiai --------
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

    // -------- el. laiškų šablonai --------
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
    // -------- detalės kategorijos, subkategorijos ir pavadinimai --------
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
    // -------- filtrų reikšmės --------
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Language", languageSchema);
