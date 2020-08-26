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
    // ---------------- navigacijos komponentai ----------------
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
      pageFields: {
        register: {
          type: String,
          required: true,
        },
        registerBuyerText: {
          type: String,
          required: true,
        },
        registerSellerText: {
          type: String,
          required: true,
        },
        registerBuyerButton: {
          type: String,
          required: true,
        },
        registerSellerButton: {
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
        socialUrls: {
          youtubeUrl: {
            type: String,
            required: true,
          },
          instagramUrl: {
            type: String,
            required: true,
          },
          facebookUrl: {
            type: String,
            required: true,
          },
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
    // ---------------- frontiniai puslapiai ----------------
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
      pageFields: {
        mainSearchPlaceholder: {
          type: String,
          required: true,
        },
        mainSearchButton: {
          type: String,
          required: true,
        },
        headerText: {
          type: String,
          required: true,
        },
        searchCar: {
          type: String,
          required: true,
        },
        searchModel: {
          type: String,
          required: true,
        },
        searchEngine: {
          type: String,
          required: true,
        },
        searchDrivingWheels: {
          type: String,
          required: true,
        },
        searchTransmission: {
          type: String,
          required: true,
        },
        searchFuel: {
          type: String,
          required: true,
        },
        searchColor: {
          type: String,
          required: true,
        },
        searchYear: {
          type: String,
          required: true,
        },
        searchEngineCapacity: {
          type: String,
          required: true,
        },
        searchEnginePower: {
          type: String,
          required: true,
        },
        expandSearchFields: {
          type: String,
          required: true,
        },
        searchByFieldsButton: {
          type: String,
          required: true,
        },
        registerBuyerText: {
          type: String,
          required: true,
        },
        registerBuyerButton: {
          type: String,
          required: true,
        },
        popularMakes: {
          type: String,
          required: true,
        },
        popularCategories: {
          type: String,
          required: true,
        },
        newestAdvertisements: {
          type: String,
          required: true,
        },
        queryFormName: {
          type: String,
          required: true,
        },
        selectMake: {
          type: String,
          required: true,
        },
        selectModel: {
          type: String,
          required: true,
        },
        enterPartCodePlaceholder: {
          type: String,
          required: true,
        },
        enterNamePlaceholder: {
          type: String,
          required: true,
        },
        enterPhonePlaceholder: {
          type: String,
          required: true,
        },
        enterEmailPlaceholder: {
          type: String,
          required: true,
        },
        enterCommentsPlaceholder: {
          type: String,
          required: true,
        },
        photosName: {
          type: String,
          required: true,
        },
        formCommentsText: {
          type: String,
          required: true,
        },
        agreeRules: {
          type: String,
          required: true,
        },
        aboutUsSectionName: {
          type: String,
          required: true,
        },
        aboutSectionText: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        emailTitle: {
          type: String,
          required: true,
        },
        emailPlaceholder: {
          type: String,
          required: true,
        },
        passwordTitle: {
          type: String,
          required: true,
        },
        passwordPlaceholder: {
          type: String,
          required: true,
        },
        agreePageRules: {
          type: String,
          required: true,
        },
        agreePrivacyPolicy: {
          type: String,
          required: true,
        },
        registerButton: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        pageDataText: {
          type: String,
          required: true,
        },
        expandPageText: {
          type: String,
          required: true,
        },
        contactsFormTitle: {
          type: String,
          required: true,
        },
        emailText: {
          type: String,
          required: true,
        },
        emailPlaceholder: {
          type: String,
          required: true,
        },
        passwordText: {
          type: String,
          required: true,
        },
        passwordPlaceholder: {
          type: String,
          required: true,
        },
        isPersonText: {
          type: String,
          required: true,
        },
        nameText: {
          type: String,
          required: true,
        },
        surnameText: {
          type: String,
          required: true,
        },
        phoneText: {
          type: String,
          required: true,
        },
        personCommerceCodeText: {
          type: String,
          required: true,
        },
        isVATPayerText: {
          type: String,
          required: true,
        },
        VATText: {
          type: String,
          required: true,
        },
        isCompanyText: {
          type: String,
          required: true,
        },
        companyNameText: {
          type: String,
          required: true,
        },
        companyCodeText: {
          type: String,
          required: true,
        },
        companyRepresentativeName: {
          type: String,
          required: true,
        },
        companyRepresentativeSurname: {
          type: String,
          required: true,
        },
        companyPhoneText: {
          type: String,
          required: true,
        },
        companyEmailText: {
          type: String,
          required: true,
        },
        billingFormTitle: {
          type: String,
          required: true,
        },

        // reikia papildyti, kai bus aiški mangopay integracija ir KYC procedūra

        agreePageRules: {
          type: String,
          required: true,
        },
        agreePrivacyPolicy: {
          type: String,
          required: true,
        },
        registerButton: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        login: {
          type: String,
          required: true,
        },
        remindPasswordLink: {
          type: String,
          required: true,
        },
        registerText: {
          type: String,
          required: true,
        },
        registerLink: {
          type: String,
          required: true,
        },
        emailTitle: {
          type: String,
          required: true,
        },
        emailPlaceholder: {
          type: String,
          required: true,
        },
        passwordTitle: {
          type: String,
          required: true,
        },
        passwordPlaceholder: {
          type: String,
          required: true,
        },

        loginButton: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        fastSearchPlaceholder: {
          type: String,
          required: true,
        },
        filterText: {
          type: String,
          required: true,
        },
        filterFuel: {
          type: String,
          required: true,
        },
        filterBodyType: {
          type: String,
          required: true,
        },
        filterTransmission: {
          type: String,
          required: true,
        },
        filterDrivingWheels: {
          type: String,
          required: true,
        },
        filterSteeringWheelPosition: {
          type: String,
          required: true,
        },
        filterPartPosition: {
          type: String,
          required: true,
        },
        filterColor: {
          type: String,
          required: true,
        },
        filterYear: {
          type: String,
          required: true,
        },
        filterEngineCapacity: {
          type: String,
          required: true,
        },
        filterEnginePower: {
          type: String,
          required: true,
        },
        clearFilterText: {
          type: String,
          required: true,
        },
        filterButton: {
          type: String,
          required: true,
        },
        searchCar: {
          type: String,
          required: true,
        },
        searchModel: {
          type: String,
          required: true,
        },
        searchEngine: {
          type: String,
          required: true,
        },
        addSearchCarFields: {
          type: String,
          required: true,
        },
        sortText: {
          type: String,
          required: true,
        },
        sortingSelect: {
          type: String,
          required: true,
        },
        foundResultsText: {
          type: String,
          required: true,
        },
        previousPage: {
          type: String,
          required: true,
        },
        nextPage: {
          type: String,
          required: true,
        },
        partCodes: {
          type: String,
          required: true,
        },
        partCondition: {
          type: String,
          required: true,
        },
        partSellerRatings: {
          type: String,
          required: true,
        },
        partPrice: {
          type: String,
          required: true,
        },
        addToCart: {
          type: String,
          required: true,
        },
        buy: {
          type: String,
          required: true,
        },
      },
    },
    singleCarSearchPage: {
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
        dismantledCarPhotosText: {
          type: String,
          required: true,
        },
        sortText: {
          type: String,
          required: true,
        },
        sortingSelect: {
          type: String,
          required: true,
        },
        foundResultsText: {
          type: String,
          required: true,
        },
        previousPage: {
          type: String,
          required: true,
        },
        nextPage: {
          type: String,
          required: true,
        },
        partCodes: {
          type: String,
          required: true,
        },
        partCondition: {
          type: String,
          required: true,
        },
        partSellerRatings: {
          type: String,
          required: true,
        },
        partPrice: {
          type: String,
          required: true,
        },
        addToCart: {
          type: String,
          required: true,
        },
        buy: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        partSellerRatings: {
          type: String,
          required: true,
        },
        partSellerRatings: {
          type: String,
          required: true,
        },
        productCode: {
          type: String,
          required: true,
        },
        buyButton: {
          type: String,
          required: true,
        },
        partInfoTitle: {
          type: String,
          required: true,
        },
        partCondition: {
          type: String,
          required: true,
        },
        partPosition: {
          type: String,
          required: true,
        },
        partCodes: {
          type: String,
          required: true,
        },
        partDescription: {
          type: String,
          required: true,
        },
        carInfoTitle: {
          type: String,
          required: true,
        },
        make: {
          type: String,
          required: true,
        },
        model: {
          type: String,
          required: true,
        },
        productionYear: {
          type: String,
          required: true,
        },
        engine: {
          type: String,
          required: true,
        },
        bodyType: {
          type: String,
          required: true,
        },
        steeringWheelPosition: {
          type: String,
          required: true,
        },
        drivingWheels: {
          type: String,
          required: true,
        },
        transmission: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
        },
        mileage: {
          type: String,
          required: true,
        },
        fuelType: {
          type: String,
          required: true,
        },
        engineCapacity: {
          type: String,
          required: true,
        },
        enginePower: {
          type: String,
          required: true,
        },
        otherCarParts: {
          type: String,
          required: true,
        },
        dismantledCarPhotos: {
          type: String,
          required: true,
        },
        paymentText: {
          type: String,
          required: true,
        },
        returnsText: {
          type: String,
          required: true,
        },
        deliveryText: {
          type: String,
          required: true,
        },
        sellerTab: {
          type: String,
          required: true,
        },
        sellerInfo: {
          type: String,
          required: true,
        },
        sellerWorkingHours: {
          type: String,
          required: true,
        },
        sellerRating: {
          type: String,
          required: true,
        },
        sellerRatingCount: {
          type: String,
          required: true,
        },
        deliveryTab: {
          type: String,
          required: true,
        },
        deliveryTabData: {
          type: String,
          required: true,
        },
        buyingTab: {
          type: String,
          required: true,
        },
        buyingTabData: {
          type: String,
          required: true,
        },
        partSeoText: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        partProductCode: {
          type: String,
          required: true,
        },
        addToCartLink: {
          type: String,
          required: true,
        },
        removeFromSavedPartsLink: {
          type: String,
          required: true,
        },
        totalAmountText: {
          type: String,
          required: true,
        },
        deliveryText: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        sellerText: {
          type: String,
          required: true,
        },
        partProductCode: {
          type: String,
          required: true,
        },
        removeFromCartLink: {
          type: String,
          required: true,
        },
        totalAmountText: {
          type: String,
          required: true,
        },
        deliveryText: {
          type: String,
          required: true,
        },
        continueButton: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        cartTab: {
          type: String,
          required: true,
        },
        loginTab: {
          type: String,
          required: true,
        },
        loginTabTitle: {
          type: String,
          required: true,
        },
        buyAsGuestText: {
          type: String,
          required: true,
        },
        buyAsGuestButton: {
          type: String,
          required: true,
        },
        continueAsGuestText: {
          type: String,
          required: true,
        },
        nameText: {
          type: String,
          required: true,
        },
        namePlaceholder: {
          type: String,
          required: true,
        },
        surnameText: {
          type: String,
          required: true,
        },
        surnamePlaceholder: {
          type: String,
          required: true,
        },
        emailText: {
          type: String,
          required: true,
        },
        emailPlaceholder: {
          type: String,
          required: true,
        },
        continueAsGuestButton: {
          type: String,
          required: true,
        },
        loginEmailText: {
          type: String,
          required: true,
        },
        loginEmailPlaceholder: {
          type: String,
          required: true,
        },
        loginPasswordText: {
          type: String,
          required: true,
        },
        loginPasswordPlaceholder: {
          type: String,
          required: true,
        },
        loginButton: {
          type: String,
          required: true,
        },
        deliveryTab: {
          type: String,
          required: true,
        },
        deliveryTabTitle: {
          type: String,
          required: true,
        },
        savedAddressNameText: {
          type: String,
          required: true,
        },
        addressText: {
          type: String,
          required: true,
        },
        addressPlaceholder: {
          type: String,
          required: true,
        },
        cityText: {
          type: String,
          required: true,
        },
        cityPlaceholder: {
          type: String,
          required: true,
        },
        postCodeText: {
          type: String,
          required: true,
        },
        postCodePlaceholder: {
          type: String,
          required: true,
        },
        countryText: {
          type: String,
          required: true,
        },
        countryPlaceholder: {
          type: String,
          required: true,
        },
        commentText: {
          type: String,
          required: true,
        },
        commentPlaceholder: {
          type: String,
          required: true,
        },
        deliverToTitle: {
          type: String,
          required: true,
        },
        legalEntityPerson: {
          type: String,
          required: true,
        },
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
        legalEntityCompany: {
          type: String,
          required: true,
        },
        companyName: {
          type: String,
          required: true,
        },
        companyCode: {
          type: String,
          required: true,
        },
        companyVatCode: {
          type: String,
          required: true,
        },
        companyPhone: {
          type: String,
          required: true,
        },
        chooseSavedAddressText: {
          type: String,
          required: true,
        },
        continueToDeliveryTypeButton: {
          type: String,
          required: true,
        },
        deliveryAddressText: {
          type: String,
          required: true,
        },
        changeDeliveryAddressLink: {
          type: String,
          required: true,
        },
        deliveryTypesText: {
          type: String,
          required: true,
        },
        deliveryType1: {
          type: String,
          required: true,
        },
        deliveryType2: {
          type: String,
          required: true,
        },
        //  ateityje gali buti daugiau pristatymo budu
        continueToPaymentButton: {
          type: String,
          required: true,
        },
        paymentTab: {
          type: String,
          required: true,
        },
        paymentTabTitle: {
          type: String,
          required: true,
        },
        bankPaymentsTab: {
          type: String,
          required: true,
        },
        chooseBankText: {
          type: String,
          required: true,
        },
        cardPaymentsTab: {
          type: String,
          required: true,
        },
        continueToConfirmationButton: {
          type: String,
          required: true,
        },
        confirmationTab: {
          type: String,
          required: true,
        },
        confirmationTabTitle: {
          type: String,
          required: true,
        },
        sellerText: {
          type: String,
          required: true,
        },
        removePartFromOrderButton: {
          type: String,
          required: true,
        },
        deliveryTypeText: {
          type: String,
          required: true,
        },
        changeDeliveryTypeLink: {
          type: String,
          required: true,
        },
        paymentTypeText: {
          type: String,
          required: true,
        },
        changePaymentTypeLink: {
          type: String,
          required: true,
        },
        partsPriceText: {
          type: String,
          required: true,
        },
        deliveryPriceText: {
          type: String,
          required: true,
        },
        totalPriceWithoutVat: {
          type: String,
          required: true,
        },
        vatAmount: {
          type: String,
          required: true,
        },
        totalPriceWithVat: {
          type: String,
          required: true,
        },
        totalForPartsText: {
          type: String,
          required: true,
        },
        totalForDeliveryText: {
          type: String,
          required: true,
        },
        totalSumText: {
          type: String,
          required: true,
        },
        agreeRules: {
          type: String,
          required: true,
        },
        confirmOrderButton: {
          type: String,
          required: true,
        },
      },
    },
    // ---------------- vartotojų panelės puslapiai ----------------

    // -------- pirkėjo panelės puslapiai --------
    profileSettingsBuyerPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        emailText: {
          type: String,
          required: true,
        },
        emailPlaceholder: {
          type: String,
          required: true,
        },
        oldPasswordText: {
          type: String,
          required: true,
        },
        oldPasswordPlaceholder: {
          type: String,
          required: true,
        },
        newPasswordText: {
          type: String,
          required: true,
        },
        newPasswordPlaceholder: {
          type: String,
          required: true,
        },
        changePasswordButton: {
          type: String,
          required: true,
        },
        myAddressesTitle: {
          type: String,
          required: true,
        },
        changeAddressButton: {
          type: String,
          required: true,
        },
        addAddressButton: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        mainData: {
          type: String,
          required: true,
        },
        expandTextLink: {
          type: String,
          required: true,
        },
        legalEntityPerson: {
          type: String,
          required: true,
        },
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
        personCommerceCode: {
          type: String,
          required: true,
        },
        isVATPayer: {
          type: String,
          required: true,
        },
        VAT: {
          type: String,
          required: true,
        },
        legalEntityCompany: {
          type: String,
          required: true,
        },
        companyName: {
          type: String,
          required: true,
        },
        companyCode: {
          type: String,
          required: true,
        },
        companyRepresentativeName: {
          type: String,
          required: true,
        },
        companyRepresentativeSurname: {
          type: String,
          required: true,
        },
        companyPhone: {
          type: String,
          required: true,
        },
        companyEmail: {
          type: String,
          required: true,
        },
        billingFormTitle: {
          type: String,
          required: true,
        },

        // reikia papildyti, kai bus aiški mangopay integracija ir KYC procedūra

        agreePageRules: {
          type: String,
          required: true,
        },
        agreePrivacyPolicy: {
          type: String,
          required: true,
        },
        registerButton: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        dateFromText: {
          type: String,
          required: true,
        },
        dateToText: {
          type: String,
          required: true,
        },
        selectStatusText: {
          type: String,
          required: true,
        },
        searchPlaceholder: {
          type: String,
          required: true,
        },
        searchButton: {
          type: String,
          required: true,
        },
        sortText: {
          type: String,
          required: true,
        },
        orderNumberText: {
          type: String,
          required: true,
        },
        orderDateText: {
          type: String,
          required: true,
        },
        sellerText: {
          type: String,
          required: true,
        },
        partsTitle: {
          type: String,
          required: true,
        },
        partProductCodeText: {
          type: String,
          required: true,
        },
        deliveryInfoTitle: {
          type: String,
          required: true,
        },
        deliveryTypeText: {
          type: String,
          required: true,
        },
        deliveryCommentText: {
          type: String,
          required: true,
        },
        deliveryPriceText: {
          type: String,
          required: true,
        },
        totalPriceText: {
          type: String,
          required: true,
        },
        orderStatusText: {
          type: String,
          required: true,
        },
        getInvoiceLink: {
          type: String,
          required: true,
        },
        sellerRatingText: {
          type: String,
          required: true,
        },
        returnPartsButton: {
          type: String,
          required: true,
        },
      },
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
      pageFields: {
        orderNumberText: {
          type: String,
          required: true,
        },
        orderDateText: {
          type: String,
          required: true,
        },
        sellerText: {
          type: String,
          required: true,
        },
        partsTitle: {
          type: String,
          required: true,
        },
        partProductCodeText: {
          type: String,
          required: true,
        },
        returnReason1: {
          type: String,
          required: true,
        },
        returnReason2: {
          type: String,
          required: true,
        },
        returnReason3: {
          type: String,
          required: true,
        },
        pickUpAddressText: {
          type: String,
          required: true,
        },
        moneyRefundTitle: {
          type: String,
          required: true,
        },
        moneyRefundName: {
          type: String,
          required: true,
        },
        moneyRefundIban: {
          type: String,
          required: true,
        },
        returnTypesTitle: {
          type: String,
          required: true,
        },
        returnType1: {
          type: String,
          required: true,
        },
        returnType2: {
          type: String,
          required: true,
        },
        returnCommentText: {
          type: String,
          required: true,
        },
        returnCommentPlaceholder: {
          type: String,
          required: true,
        },
        continueButton: {
          type: String,
          required: true,
        },
        successfulReturnRegistrationTitle: {
          type: String,
          required: true,
        },
        returnInstructionsData: {
          type: String,
          required: true,
        },
        printStickerLink: {
          type: String,
          required: true,
        },
      },
    },
    // -------- pardavėjo panelės puslapiai --------
    profileSettingsSellerPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        emailText: {
          type: String,
          required: true,
        },
        emailPlaceholder: {
          type: String,
          required: true,
        },
        oldPasswordText: {
          type: String,
          required: true,
        },
        oldPasswordPlaceholder: {
          type: String,
          required: true,
        },
        newPasswordText: {
          type: String,
          required: true,
        },
        newPasswordPlaceholder: {
          type: String,
          required: true,
        },
        changePasswordButton: {
          type: String,
          required: true,
        },
        sellerInfoText: {
          type: String,
          required: true,
        },
        legalEntityPersonText: {
          type: String,
          required: true,
        },
        nameText: {
          type: String,
          required: true,
        },
        surnameText: {
          type: String,
          required: true,
        },
        phoneText: {
          type: String,
          required: true,
        },
        personCommerceCodeText: {
          type: String,
          required: true,
        },
        isVATPayerText: {
          type: String,
          required: true,
        },
        VATText: {
          type: String,
          required: true,
        },
        legalEntityCompanyText: {
          type: String,
          required: true,
        },
        companyNameText: {
          type: String,
          required: true,
        },
        companyCodeText: {
          type: String,
          required: true,
        },
        companyRepresentativeName: {
          type: String,
          required: true,
        },
        companyRepresentativeSurname: {
          type: String,
          required: true,
        },
        companyPhone: {
          type: String,
          required: true,
        },
        companyEmail: {
          type: String,
          required: true,
        },
        workingHoursText: {
          type: String,
          required: true,
        },
        mondayHours: {
          type: String,
          required: true,
        },
        tuesdayHouurs: {
          type: String,
          required: true,
        },
        wednesdayHours: {
          type: String,
          required: true,
        },
        thursdayHours: {
          type: String,
          required: true,
        },
        fridayHours: {
          type: String,
          required: true,
        },
        saturdayHours: {
          type: String,
          required: true,
        },
        sundayHours: {
          type: String,
          required: true,
        },
        uploadLogoButton: {
          type: String,
          required: true,
        },
        addressText: {
          type: String,
          required: true,
        },
        addressFieldText: {
          type: String,
          required: true,
        },
        addressFieldPlaceholder: {
          type: String,
          required: true,
        },
        cityText: {
          type: String,
          required: true,
        },
        cityPlaceholder: {
          type: String,
          required: true,
        },
        postCodeText: {
          type: String,
          required: true,
        },
        countryText: {
          type: String,
          required: true,
        },
        countryPlaceholder: {
          type: String,
          required: true,
        },
        saveInfoButton: {
          type: String,
          required: true,
        },
      },
    },
    sellerInformationPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        mainData: {
          type: String,
          required: true,
        },
      },
    },
    sellerImportPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        chooseTypeText: {
          type: String,
          required: true,
        },
        partsText: {
          type: String,
          required: true,
        },
        carsText: {
          type: String,
          required: true,
        },
        importButton: {
          type: String,
          required: true,
        },
        mainData: {
          type: String,
          required: true,
        },
      },
    },
    sellerExportPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        dateFromText: {
          type: String,
          required: true,
        },
        dateToText: {
          type: String,
          required: true,
        },
        chooseTypeText: {
          type: String,
          required: true,
        },
        partsText: {
          type: String,
          required: true,
        },
        carsText: {
          type: String,
          required: true,
        },
        invoicesText: {
          type: String,
          required: true,
        },
        exportButton: {
          type: String,
          required: true,
        },
        mainData: {
          type: String,
          required: true,
        },
      },
    },
    sellerStatisticsPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        filterText: {
          type: String,
          required: true,
        },
        dateFromText: {
          type: String,
          required: true,
        },
        dateToText: {
          type: String,
          required: true,
        },
        turnoverText: {
          type: String,
          required: true,
        },
        partsText: {
          type: String,
          required: true,
        },
        carsText: {
          type: String,
          required: true,
        },
        ordersText: {
          type: String,
          required: true,
        },
        adViewsText: {
          type: String,
          required: true,
        },
      },
    },
    // ardomi automobiliai
    sellerCarsPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        searchPlaceholder: {
          type: String,
          required: true,
        },
        searchButton: {
          type: String,
          required: true,
        },
        columnNameText: {
          type: String,
          required: true,
        },
        columnYearText: {
          type: String,
          required: true,
        },
        columnCreatedText: {
          type: String,
          required: true,
        },
        columnCreatePartText: {
          type: String,
          required: true,
        },
        columnActionsText: {
          type: String,
          required: true,
        },
        createPartLink: {
          type: String,
          required: true,
        },
        editCarLink: {
          type: String,
          required: true,
        },
        deleteCarLink: {
          type: String,
          required: true,
        },
        addCarButton: {
          type: String,
          required: true,
        },
      },
    },
    sellerCarsAddCarWindow: {
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        makeText: {
          type: String,
          required: true,
        },
        makePlaceholder: {
          type: String,
          required: true,
        },
        modelText: {
          type: String,
          required: true,
        },
        modelPlaceholder: {
          type: String,
          required: true,
        },
        productionYearText: {
          type: String,
          required: true,
        },
        productionYearPlaceholder: {
          type: String,
          required: true,
        },
        engineText: {
          type: String,
          required: true,
        },
        enginePlaceholder: {
          type: String,
          required: true,
        },
        bodyTypeText: {
          type: String,
          required: true,
        },
        bodyTypePlaceholder: {
          type: String,
          required: true,
        },
        steeringWheelPositionText: {
          type: String,
          required: true,
        },
        steeringWheelPositionPlaceholder: {
          type: String,
          required: true,
        },
        drivingWheelsText: {
          type: String,
          required: true,
        },
        drivingWheelsPlaceholder: {
          type: String,
          required: true,
        },
        transmissionText: {
          type: String,
          required: true,
        },
        transmissionPlaceholder: {
          type: String,
          required: true,
        },
        colorText: {
          type: String,
          required: true,
        },
        colorPlaceholder: {
          type: String,
          required: true,
        },
        fuelTypeText: {
          type: String,
          required: true,
        },
        fuelTypePlaceholder: {
          type: String,
          required: true,
        },
        engineCapacityText: {
          type: String,
          required: true,
        },
        engineCapacityPlaceholder: {
          type: String,
          required: true,
        },
        enginePowerText: {
          type: String,
          required: true,
        },
        enginePowerPlaceholder: {
          type: String,
          required: true,
        },
        mileageText: {
          type: String,
          required: true,
        },
        mileagePlaceholder: {
          type: String,
          required: true,
        },
        uploadPhotosButton: {
          type: String,
          required: true,
        },
        addButton: {
          type: String,
          required: true,
        },
      },
    },
    sellerCarsEditCarWindow: {
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        makeText: {
          type: String,
          required: true,
        },
        modelText: {
          type: String,
          required: true,
        },
        productionYearText: {
          type: String,
          required: true,
        },
        engineText: {
          type: String,
          required: true,
        },
        bodyTypeText: {
          type: String,
          required: true,
        },
        steeringWheelPositionText: {
          type: String,
          required: true,
        },
        drivingWheelsText: {
          type: String,
          required: true,
        },
        transmissionText: {
          type: String,
          required: true,
        },
        colorText: {
          type: String,
          required: true,
        },
        fuelTypeText: {
          type: String,
          required: true,
        },
        engineCapacityText: {
          type: String,
          required: true,
        },
        enginePowerText: {
          type: String,
          required: true,
        },
        mileageText: {
          type: String,
          required: true,
        },
        mileagePlaceholder: {
          type: String,
          required: true,
        },
        uploadPhotosButton: {
          type: String,
          required: true,
        },
        saveButton: {
          type: String,
          required: true,
        },
      },
    },
    // parduodamos detalės
    sellerPartsPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        filterText: {
          type: String,
          required: true,
        },
        categoryPlaceholder: {
          type: String,
          required: true,
        },
        subcategoryPlaceholder: {
          type: String,
          required: true,
        },
        partNamePlaceholder: {
          type: String,
          required: true,
        },
        makePlaceholder: {
          type: String,
          required: true,
        },
        modelPlaceholder: {
          type: String,
          required: true,
        },
        enginePlaceholder: {
          type: String,
          required: true,
        },
        filterButton: {
          type: String,
          required: true,
        },
        selectAllPartsText: {
          type: String,
          required: true,
        },
        selectedPartsText: {
          type: String,
          required: true,
        },
        selectedPartsDeleteButton: {
          type: String,
          required: true,
        },
        selectedPartsChangeStatusButton: {
          type: String,
          required: true,
        },
        columnNameText: {
          type: String,
          required: true,
        },
        columnCarText: {
          type: String,
          required: true,
        },
        columnPriceText: {
          type: String,
          required: true,
        },
        columnCreatedText: {
          type: String,
          required: true,
        },
        columnStatusText: {
          type: String,
          required: true,
        },
        columnActionsText: {
          type: String,
          required: true,
        },
        createPartLink: {
          type: String,
          required: true,
        },
        copyPartLink: {
          type: String,
          required: true,
        },
        editPartLink: {
          type: String,
          required: true,
        },
        deletePartLink: {
          type: String,
          required: true,
        },
        addPartButton: {
          type: String,
          required: true,
        },
      },
    },
    sellerPartsAddPartWindow: {
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        chooseCarText: {
          type: String,
          required: true,
        },
        useChosenCarButton: {
          type: String,
          required: true,
        },
        makeText: {
          type: String,
          required: true,
        },
        makePlaceholder: {
          type: String,
          required: true,
        },
        modelText: {
          type: String,
          required: true,
        },
        modelPlaceholder: {
          type: String,
          required: true,
        },
        productionYearText: {
          type: String,
          required: true,
        },
        productionYearPlaceholder: {
          type: String,
          required: true,
        },
        searchPartNameText: {
          type: String,
          required: true,
        },
        searchPartNamePlaceholder: {
          type: String,
          required: true,
        },
        categoryText: {
          type: String,
          required: true,
        },
        subCategoryText: {
          type: String,
          required: true,
        },
        partNameText: {
          type: String,
          required: true,
        },
        engineText: {
          type: String,
          required: true,
        },
        enginePlaceholder: {
          type: String,
          required: true,
        },
        bodyTypeText: {
          type: String,
          required: true,
        },
        bodyTypePlaceholder: {
          type: String,
          required: true,
        },
        steeringWheelPositionText: {
          type: String,
          required: true,
        },
        steeringWheelPositionPlaceholder: {
          type: String,
          required: true,
        },
        drivingWheelsText: {
          type: String,
          required: true,
        },
        drivingWheelsPlaceholder: {
          type: String,
          required: true,
        },
        transmissionText: {
          type: String,
          required: true,
        },
        transmissionPlaceholder: {
          type: String,
          required: true,
        },
        colorText: {
          type: String,
          required: true,
        },
        colorPlaceholder: {
          type: String,
          required: true,
        },
        fuelTypeText: {
          type: String,
          required: true,
        },
        fuelTypePlaceholder: {
          type: String,
          required: true,
        },
        engineCapacityText: {
          type: String,
          required: true,
        },
        engineCapacityPlaceholder: {
          type: String,
          required: true,
        },
        enginePowerText: {
          type: String,
          required: true,
        },
        enginePowerPlaceholder: {
          type: String,
          required: true,
        },
        mileageText: {
          type: String,
          required: true,
        },
        mileagePlaceholder: {
          type: String,
          required: true,
        },
        partConditionText: {
          type: String,
          required: true,
        },
        partConditionPlaceholder: {
          type: String,
          required: true,
        },
        partPositionText: {
          type: String,
          required: true,
        },
        partPositionPlaceholder: {
          type: String,
          required: true,
        },
        partCodeText: {
          type: String,
          required: true,
        },
        partCodePlaceholder: {
          type: String,
          required: true,
        },
        addMoreCodesLink: {
          type: String,
          required: true,
        },
        partDescriptionText: {
          type: String,
          required: true,
        },
        partDescriptionPlaceholder: {
          type: String,
          required: true,
        },
        uploadPhotosButton: {
          type: String,
          required: true,
        },
        dimensionsText: {
          type: String,
          required: true,
        },
        lengthText: {
          type: String,
          required: true,
        },
        lengthPlaceholder: {
          type: String,
          required: true,
        },
        widthText: {
          type: String,
          required: true,
        },
        widthPlaceholder: {
          type: String,
          required: true,
        },
        heightText: {
          type: String,
          required: true,
        },
        heightPlaceholder: {
          type: String,
          required: true,
        },
        weightText: {
          type: String,
          required: true,
        },
        weightPlaceholder: {
          type: String,
          required: true,
        },
        priceText: {
          type: String,
          required: true,
        },
        pricePlaceholder: {
          type: String,
          required: true,
        },
        addButton: {
          type: String,
          required: true,
        },
      },
    },
    sellerPartsCopyPartWindow: {
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        chooseCarText: {
          type: String,
          required: true,
        },
        useChosenCarButton: {
          type: String,
          required: true,
        },
        makeText: {
          type: String,
          required: true,
        },
        makePlaceholder: {
          type: String,
          required: true,
        },
        modelText: {
          type: String,
          required: true,
        },
        modelPlaceholder: {
          type: String,
          required: true,
        },
        productionYearText: {
          type: String,
          required: true,
        },
        productionYearPlaceholder: {
          type: String,
          required: true,
        },
        searchPartNameText: {
          type: String,
          required: true,
        },
        searchPartNamePlaceholder: {
          type: String,
          required: true,
        },
        categoryText: {
          type: String,
          required: true,
        },
        subCategoryText: {
          type: String,
          required: true,
        },
        partNameText: {
          type: String,
          required: true,
        },
        engineText: {
          type: String,
          required: true,
        },
        enginePlaceholder: {
          type: String,
          required: true,
        },
        bodyTypeText: {
          type: String,
          required: true,
        },
        bodyTypePlaceholder: {
          type: String,
          required: true,
        },
        steeringWheelPositionText: {
          type: String,
          required: true,
        },
        steeringWheelPositionPlaceholder: {
          type: String,
          required: true,
        },
        drivingWheelsText: {
          type: String,
          required: true,
        },
        drivingWheelsPlaceholder: {
          type: String,
          required: true,
        },
        transmissionText: {
          type: String,
          required: true,
        },
        transmissionPlaceholder: {
          type: String,
          required: true,
        },
        colorText: {
          type: String,
          required: true,
        },
        colorPlaceholder: {
          type: String,
          required: true,
        },
        fuelTypeText: {
          type: String,
          required: true,
        },
        fuelTypePlaceholder: {
          type: String,
          required: true,
        },
        engineCapacityText: {
          type: String,
          required: true,
        },
        engineCapacityPlaceholder: {
          type: String,
          required: true,
        },
        enginePowerText: {
          type: String,
          required: true,
        },
        enginePowerPlaceholder: {
          type: String,
          required: true,
        },
        mileageText: {
          type: String,
          required: true,
        },
        mileagePlaceholder: {
          type: String,
          required: true,
        },
        partConditionText: {
          type: String,
          required: true,
        },
        partConditionPlaceholder: {
          type: String,
          required: true,
        },
        partPositionText: {
          type: String,
          required: true,
        },
        partPositionPlaceholder: {
          type: String,
          required: true,
        },
        partCodeText: {
          type: String,
          required: true,
        },
        partCodePlaceholder: {
          type: String,
          required: true,
        },
        addMoreCodesLink: {
          type: String,
          required: true,
        },
        partDescriptionText: {
          type: String,
          required: true,
        },
        partDescriptionPlaceholder: {
          type: String,
          required: true,
        },
        uploadPhotosButton: {
          type: String,
          required: true,
        },
        dimensionsText: {
          type: String,
          required: true,
        },
        lengthText: {
          type: String,
          required: true,
        },
        lengthPlaceholder: {
          type: String,
          required: true,
        },
        widthText: {
          type: String,
          required: true,
        },
        widthPlaceholder: {
          type: String,
          required: true,
        },
        heightText: {
          type: String,
          required: true,
        },
        heightPlaceholder: {
          type: String,
          required: true,
        },
        weightText: {
          type: String,
          required: true,
        },
        weightPlaceholder: {
          type: String,
          required: true,
        },
        priceText: {
          type: String,
          required: true,
        },
        pricePlaceholder: {
          type: String,
          required: true,
        },
        addButton: {
          type: String,
          required: true,
        },
      },
    },
    sellerPartsEditPartWindow: {
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        chooseCarText: {
          type: String,
          required: true,
        },
        useChosenCarButton: {
          type: String,
          required: true,
        },
        makeText: {
          type: String,
          required: true,
        },
        makePlaceholder: {
          type: String,
          required: true,
        },
        modelText: {
          type: String,
          required: true,
        },
        modelPlaceholder: {
          type: String,
          required: true,
        },
        productionYearText: {
          type: String,
          required: true,
        },
        productionYearPlaceholder: {
          type: String,
          required: true,
        },
        searchPartNameText: {
          type: String,
          required: true,
        },
        searchPartNamePlaceholder: {
          type: String,
          required: true,
        },
        categoryText: {
          type: String,
          required: true,
        },
        subCategoryText: {
          type: String,
          required: true,
        },
        partNameText: {
          type: String,
          required: true,
        },
        engineText: {
          type: String,
          required: true,
        },
        enginePlaceholder: {
          type: String,
          required: true,
        },
        bodyTypeText: {
          type: String,
          required: true,
        },
        bodyTypePlaceholder: {
          type: String,
          required: true,
        },
        steeringWheelPositionText: {
          type: String,
          required: true,
        },
        steeringWheelPositionPlaceholder: {
          type: String,
          required: true,
        },
        drivingWheelsText: {
          type: String,
          required: true,
        },
        drivingWheelsPlaceholder: {
          type: String,
          required: true,
        },
        transmissionText: {
          type: String,
          required: true,
        },
        transmissionPlaceholder: {
          type: String,
          required: true,
        },
        colorText: {
          type: String,
          required: true,
        },
        colorPlaceholder: {
          type: String,
          required: true,
        },
        fuelTypeText: {
          type: String,
          required: true,
        },
        fuelTypePlaceholder: {
          type: String,
          required: true,
        },
        engineCapacityText: {
          type: String,
          required: true,
        },
        engineCapacityPlaceholder: {
          type: String,
          required: true,
        },
        enginePowerText: {
          type: String,
          required: true,
        },
        enginePowerPlaceholder: {
          type: String,
          required: true,
        },
        mileageText: {
          type: String,
          required: true,
        },
        mileagePlaceholder: {
          type: String,
          required: true,
        },
        partConditionText: {
          type: String,
          required: true,
        },
        partConditionPlaceholder: {
          type: String,
          required: true,
        },
        partPositionText: {
          type: String,
          required: true,
        },
        partPositionPlaceholder: {
          type: String,
          required: true,
        },
        partCodeText: {
          type: String,
          required: true,
        },
        partCodePlaceholder: {
          type: String,
          required: true,
        },
        addMoreCodesLink: {
          type: String,
          required: true,
        },
        partDescriptionText: {
          type: String,
          required: true,
        },
        partDescriptionPlaceholder: {
          type: String,
          required: true,
        },
        uploadPhotosButton: {
          type: String,
          required: true,
        },
        dimensionsText: {
          type: String,
          required: true,
        },
        lengthText: {
          type: String,
          required: true,
        },
        lengthPlaceholder: {
          type: String,
          required: true,
        },
        widthText: {
          type: String,
          required: true,
        },
        widthPlaceholder: {
          type: String,
          required: true,
        },
        heightText: {
          type: String,
          required: true,
        },
        heightPlaceholder: {
          type: String,
          required: true,
        },
        weightText: {
          type: String,
          required: true,
        },
        weightPlaceholder: {
          type: String,
          required: true,
        },
        priceText: {
          type: String,
          required: true,
        },
        pricePlaceholder: {
          type: String,
          required: true,
        },
        saveButton: {
          type: String,
          required: true,
        },
      },
    },
    // gauti užsakymai
    sellerOrdersPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        dateFromText: {
          type: String,
          required: true,
        },
        dateToText: {
          type: String,
          required: true,
        },
        selectStatusText: {
          type: String,
          required: true,
        },
        searchPlaceholder: {
          type: String,
          required: true,
        },
        searchButton: {
          type: String,
          required: true,
        },
        sortText: {
          type: String,
          required: true,
        },
        orderNumberText: {
          type: String,
          required: true,
        },
        orderDateText: {
          type: String,
          required: true,
        },
        orderStatusType: {
          type: String,
          required: true,
        },
        viewOrderLink: {
          type: String,
          required: true,
        },
        editOrderLink: {
          type: String,
          required: true,
        },
        partProductCodeText: {
          type: String,
          required: true,
        },
        deliveryTypeText: {
          type: String,
          required: true,
        },
        deliveryPriceText: {
          type: String,
          required: true,
        },
        totalPriceText: {
          type: String,
          required: true,
        },
        orderStatusText: {
          type: String,
          required: true,
        },
      },
    },
    sellerOrdersViewOrderWindow: {
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        orderNumberText: {
          type: String,
          required: true,
        },
        orderDateText: {
          type: String,
          required: true,
        },
        sellerInfoText: {
          type: String,
          required: true,
        },
        buyerInfoText: {
          type: String,
          required: true,
        },
        orderStatusText: {
          type: String,
          required: true,
        },
        orderStatusType: {
          type: String,
          required: true,
        },
        partsTitle: {
          type: String,
          required: true,
        },
        partProductCodeText: {
          type: String,
          required: true,
        },
        deliveryPriceText: {
          type: String,
          required: true,
        },
        phoneText: {
          type: String,
          required: true,
        },
        deliveryTypeText: {
          type: String,
          required: true,
        },
        addressText: {
          type: String,
          required: true,
        },
        commentText: {
          type: String,
          required: true,
        },
        totalPriceText: {
          type: String,
          required: true,
        },
        printStickerLink: {
          type: String,
          required: true,
        },
        callCourierLink: {
          type: String,
          required: true,
        },
        orderReadyLink: {
          type: String,
          required: true,
        },
        orderDeliveredLink: {
          type: String,
          required: true,
        },
        editOrderLink: {
          type: String,
          required: true,
        },
        deleteOrderLink: {
          type: String,
          required: true,
        },
      },
    },
    sellerOrdersEditOrderWindow: {
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        orderNumberText: {
          type: String,
          required: true,
        },
        orderDateText: {
          type: String,
          required: true,
        },
        sellerInfoText: {
          type: String,
          required: true,
        },
        buyerInfoText: {
          type: String,
          required: true,
        },
        orderStatusText: {
          type: String,
          required: true,
        },
        orderStatusType: {
          type: String,
          required: true,
        },
        partsTitle: {
          type: String,
          required: true,
        },
        partProductCodeText: {
          type: String,
          required: true,
        },
        deletePartFromOrderLink: {
          type: String,
          required: true,
        },
        addPartToOrderText: {
          type: String,
          required: true,
        },
        addPartButton: {
          type: String,
          required: true,
        },
        deliveryPriceText: {
          type: String,
          required: true,
        },
        phoneText: {
          type: String,
          required: true,
        },
        deliveryTypeText: {
          type: String,
          required: true,
        },
        addressText: {
          type: String,
          required: true,
        },
        commentText: {
          type: String,
          required: true,
        },
        totalPriceText: {
          type: String,
          required: true,
        },
        saveButton: {
          type: String,
          required: true,
        },
      },
    },
    // sąskaitos faktūros
    sellerInvoicesPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        dateFromText: {
          type: String,
          required: true,
        },
        dateToText: {
          type: String,
          required: true,
        },
        selectStatusText: {
          type: String,
          required: true,
        },
        searchPlaceholder: {
          type: String,
          required: true,
        },
        searchButton: {
          type: String,
          required: true,
        },
        sortText: {
          type: String,
          required: true,
        },
        invoiceNumberText: {
          type: String,
          required: true,
        },
        invoiceDateText: {
          type: String,
          required: true,
        },
        buyerInfoText: {
          type: String,
          required: true,
        },
        partProductCodeText: {
          type: String,
          required: true,
        },
        deliveryPriceText: {
          type: String,
          required: true,
        },
        totalPriceText: {
          type: String,
          required: true,
        },
        viewInvoiceLink: {
          type: String,
          required: true,
        },
        editInvoiceLink: {
          type: String,
          required: true,
        },
      },
    },
    sellerInvoicesViewInvoiceWindow: {
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        invoiceNumberText: {
          type: String,
          required: true,
        },
        invoiceDateText: {
          type: String,
          required: true,
        },
        sellerInfoText: {
          type: String,
          required: true,
        },
        buyerInfoText: {
          type: String,
          required: true,
        },
        partsTitle: {
          type: String,
          required: true,
        },
        partProductCodeText: {
          type: String,
          required: true,
        },
        deliveryPriceText: {
          type: String,
          required: true,
        },
        phoneText: {
          type: String,
          required: true,
        },
        deliveryTypeText: {
          type: String,
          required: true,
        },
        addressText: {
          type: String,
          required: true,
        },
        totalPriceInWordsText: {
          type: String,
          required: true,
        },
        totalPriceText: {
          type: String,
          required: true,
        },
        printInvoiceLink: {
          type: String,
          required: true,
        },
        editInvoiceLink: {
          type: String,
          required: true,
        },
        deleteInvoiceLink: {
          type: String,
          required: true,
        },
      },
    },
    sellerInvoicesEditInvoiceWindow: {
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        invoiceNumberText: {
          type: String,
          required: true,
        },
        invoiceTypeText: {
          type: String,
          required: true,
        },
        invoiceDateText: {
          type: String,
          required: true,
        },
        sellerInfoText: {
          type: String,
          required: true,
        },
        buyerInfoText: {
          type: String,
          required: true,
        },
        partsTitle: {
          type: String,
          required: true,
        },
        partProductCodeText: {
          type: String,
          required: true,
        },
        deletePartFromOrderLink: {
          type: String,
          required: true,
        },
        addPartToOrderText: {
          type: String,
          required: true,
        },
        addPartButton: {
          type: String,
          required: true,
        },
        deliveryPriceText: {
          type: String,
          required: true,
        },
        phoneText: {
          type: String,
          required: true,
        },
        deliveryTypeText: {
          type: String,
          required: true,
        },
        addressText: {
          type: String,
          required: true,
        },
        totalPriceText: {
          type: String,
          required: true,
        },
        saveButton: {
          type: String,
          required: true,
        },
      },
    },
    // užklausų nustatymai ir gautos užklausos
    sellerQueriesPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        getQueriesText: {
          type: String,
          required: true,
        },
        getAllQueriesText: {
          type: String,
          required: true,
        },
        makeText: {
          type: String,
          required: true,
        },
        modelText: {
          type: String,
          required: true,
        },
        addSearchCarFields: {
          type: String,
          required: true,
        },
        queriesReceivedTitle: {
          type: String,
          required: true,
        },
        dateFromText: {
          type: String,
          required: true,
        },
        dateToText: {
          type: String,
          required: true,
        },
        selectStatusText: {
          type: String,
          required: true,
        },
        searchPlaceholder: {
          type: String,
          required: true,
        },
        searchButton: {
          type: String,
          required: true,
        },
        sortText: {
          type: String,
          required: true,
        },
        queryNumberText: {
          type: String,
          required: true,
        },
        queryDateText: {
          type: String,
          required: true,
        },
        queryStatusTitle: {
          type: String,
          required: true,
        },
        queryAnsweredButton: {
          type: String,
          required: true,
        },
        queryFromInfoText: {
          type: String,
          required: true,
        },
        queryCommentText: {
          type: String,
          required: true,
        },
        queryPhotosText: {
          type: String,
          required: true,
        },
        partProductCodeText: {
          type: String,
          required: true,
        },
      },
    },
    // ---------------- sistemos administratoriaus panelės puslapiai ----------------

    // -------- statistikos panelės puslapiai --------
    adminStatisticsUsersPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        dateFromText: {
          type: String,
          required: true,
        },
        dateToText: {
          type: String,
          required: true,
        },
        filterButton: {
          type: String,
          required: true,
        },
        newUsersText: {
          type: String,
          required: true,
        },
        buyersSellersText: {
          type: String,
          required: true,
        },
        usersCountText: {
          type: String,
          required: true,
        },
        sellersByPaymentStatusText: {
          type: String,
          required: true,
        },
      },
    },
    adminStatisticsAdvertisementsPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        dateFromText: {
          type: String,
          required: true,
        },
        dateToText: {
          type: String,
          required: true,
        },
        filerByUserText: {
          type: String,
          required: true,
        },
        filterButton: {
          type: String,
          required: true,
        },
        adViewsText: {
          type: String,
          required: true,
        },
        carsText: {
          type: String,
          required: true,
        },
        partsText: {
          type: String,
          required: true,
        },
      },
    },
    adminStatisticsOrdersPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        dateFromText: {
          type: String,
          required: true,
        },
        dateToText: {
          type: String,
          required: true,
        },
        filerByUserText: {
          type: String,
          required: true,
        },
        filterButton: {
          type: String,
          required: true,
        },
        turnoverText: {
          type: String,
          required: true,
        },
        ordersText: {
          type: String,
          required: true,
        },
        carsText: {
          type: String,
          required: true,
        },
        deliveryTypesText: {
          type: String,
          required: true,
        },
        deliveriesToLithuaniaDistrictsText: {
          type: String,
          required: true,
        },
        deliveriesByCountriesText: {
          type: String,
          required: true,
        },
      },
    },
    adminStatisticsQueriesPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        dateFromText: {
          type: String,
          required: true,
        },
        dateToText: {
          type: String,
          required: true,
        },
        filerByUserText: {
          type: String,
          required: true,
        },
        filterButton: {
          type: String,
          required: true,
        },
        queriesByStatusText: {
          type: String,
          required: true,
        },
        queriesByMakeText: {
          type: String,
          required: true,
        },
        queriesByModelText: {
          type: String,
          required: true,
        },
      },
    },
    adminStatisticsIncomePage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        dateFromText: {
          type: String,
          required: true,
        },
        dateToText: {
          type: String,
          required: true,
        },
        filerByUserText: {
          type: String,
          required: true,
        },
        filterButton: {
          type: String,
          required: true,
        },
        commissionsText: {
          type: String,
          required: true,
        },
        commisionsTurnoverText: {
          type: String,
          required: true,
        },
        commissionsTimelineText: {
          type: String,
          required: true,
        },
        commissionsByPaymentStatusText: {
          type: String,
          required: true,
        },
      },
    },

    // -------- vartotojų panelės puslapiai --------
    adminUsersSettingsPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        dateFromText: {
          type: String,
          required: true,
        },
        dateToText: {
          type: String,
          required: true,
        },
        searcUserText: {
          type: String,
          required: true,
        },
        filterButton: {
          type: String,
          required: true,
        },
        columnEmailText: {
          type: String,
          required: true,
        },
        columnRegistrationTimeText: {
          type: String,
          required: true,
        },
        columnIsVerifiedText: {
          type: String,
          required: true,
        },
        columnIsSellerText: {
          type: String,
          required: true,
        },
        columnSellerNameText: {
          type: String,
          required: true,
        },
        columnNumberOfAddressesText: {
          type: String,
          required: true,
        },
        columnActionsText: {
          type: String,
          required: true,
        },
        blockUserLink: {
          type: String,
          required: true,
        },
        viewUserProfileLink: {
          type: String,
          required: true,
        },
        viewUserAddressesLink: {
          type: String,
          required: true,
        },
      },
    },
    adminUsersSettingsViewProfileWindow: {
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        saveEmailButton: {
          type: String,
          required: true,
        },
        sendPassWrodChangeEmailLink: {
          type: String,
          required: true,
        },
        sendPasswordChangeButton: {
          type: String,
          required: true,
        },
        isSellerText: {
          type: String,
          required: true,
        },
        legalEntityPersonText: {
          type: String,
          required: true,
        },
        nameText: {
          type: String,
          required: true,
        },
        surnameText: {
          type: String,
          required: true,
        },
        phoneText: {
          type: String,
          required: true,
        },
        legalEntityCompanyText: {
          type: String,
          required: true,
        },
        companyNameText: {
          type: String,
          required: true,
        },
        companyCodeText: {
          type: String,
          required: true,
        },
        companyVatCode: {
          type: String,
          required: true,
        },
        companyPhone: {
          type: String,
          required: true,
        },
        companyRepresentativeName: {
          type: String,
          required: true,
        },
        companyRepresentativeSurname: {
          type: String,
          required: true,
        },
        workingHoursText: {
          type: String,
          required: true,
        },
        mondayHours: {
          type: String,
          required: true,
        },
        tuesdayHouurs: {
          type: String,
          required: true,
        },
        wednesdayHours: {
          type: String,
          required: true,
        },
        thursdayHours: {
          type: String,
          required: true,
        },
        fridayHours: {
          type: String,
          required: true,
        },
        saturdayHours: {
          type: String,
          required: true,
        },
        sundayHours: {
          type: String,
          required: true,
        },
        uploadLogoButton: {
          type: String,
          required: true,
        },
        addressText: {
          type: String,
          required: true,
        },
        addressFieldText: {
          type: String,
          required: true,
        },
        addressFieldPlaceholder: {
          type: String,
          required: true,
        },
        cityText: {
          type: String,
          required: true,
        },
        cityPlaceholder: {
          type: String,
          required: true,
        },
        postCodeText: {
          type: String,
          required: true,
        },
        countryText: {
          type: String,
          required: true,
        },
        countryPlaceholder: {
          type: String,
          required: true,
        },
        saveInfoButton: {
          type: String,
          required: true,
        },
      },
    },
    adminUsersSettingsviewAddressesWindow: {
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        legalEntity: {
          type: String,
          required: true,
        },
        nameText: {
          type: String,
          required: true,
        },
        surnameText: {
          type: String,
          required: true,
        },
        phoneText: {
          type: String,
          required: true,
        },
        addressText: {
          type: String,
          required: true,
        },
        cityText: {
          type: String,
          required: true,
        },
        postCodeText: {
          type: String,
          required: true,
        },
        countryText: {
          type: String,
          required: true,
        },
        commentText: {
          type: String,
          required: true,
        },
        companyNameText: {
          type: String,
          required: true,
        },
        companyCodeText: {
          type: String,
          required: true,
        },
        vatText: {
          type: String,
          required: true,
        },
        companyRepresentativeName: {
          type: String,
          required: true,
        },
        companyRepresentativeSurname: {
          type: String,
          required: true,
        },
        emailText: {
          type: String,
          required: true,
        },
        editAddressButton: {
          type: String,
          required: true,
        },
        addAddressButton: {
          type: String,
          required: true,
        },
      },
    },
    // -------- turinio valdymo panelės puslapiai --------
    adminCmsSettingsPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        cookiesTitle: {
          type: String,
          required: true,
        },
        cookiesName1: {
          type: String,
          required: true,
        },
        cookiesName2: {
          type: String,
          required: true,
        },
        cookiesName3: {
          type: String,
          required: true,
        },
        cookiesName4: {
          type: String,
          required: true,
        },
        editCookieButton: {
          type: String,
          required: true,
        },
        deleteCookieButton: {
          type: String,
          required: true,
        },
        addNewCookieTitle: {
          type: String,
          required: true,
        },
        addNewTitleText: {
          type: String,
          required: true,
        },
        addNewTitlePlaceholder: {
          type: String,
          required: true,
        },
        addNewCookieText: {
          type: String,
          required: true,
        },
        addNewCookiePlaceholder: {
          type: String,
          required: true,
        },
        addButton: {
          type: String,
          required: true,
        },
      },
    },
    adminCmsEmailsPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        selectTemplateText: {
          type: String,
          required: true,
        },
        selectTemplateButton: {
          type: String,
          required: true,
        },
        selectLanguageText: {
          type: String,
          required: true,
        },
        senderEmailText: {
          type: String,
          required: true,
        },
        senderEmailPlaceholder: {
          type: String,
          required: true,
        },
        senderNameText: {
          type: String,
          required: true,
        },
        senderNamePlaceholder: {
          type: String,
          required: true,
        },
        templateNameText: {
          type: String,
          required: true,
        },
        templateNamePlaceholder: {
          type: String,
          required: true,
        },
        templateBodyTitle: {
          type: String,
          required: true,
        },
        templateBodyData: {
          type: String,
          required: true,
        },
      },
    },
    adminCmsPagesPage: {
      url: {
        type: String,
        required: true,
      },
      pageTitle: {
        type: String,
        required: true,
      },
      pageFields: {
        selectPageText: {
          type: String,
          required: true,
        },
        selectPageButton: {
          type: String,
          required: true,
        },
        selectLanguageText: {
          type: String,
          required: true,
        },
        pageNameText: {
          type: String,
          required: true,
        },
        pageNamePlaceholder: {
          type: String,
          required: true,
        },
        templateBodyData: {
          type: String,
          required: true,
        },
      },
    },

    // ---------------- el. laiškų šablonai ----------------
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
    // ---------------- detalės kategorijos, subkategorijos ir pavadinimai ----------------
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
    // ---------------- filtrų reikšmės ----------------
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
