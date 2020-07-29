const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "pirkėjas", "pardavėjas"],
    required: true,
  },
  type: {
    type: String,
    enum: ["fizinis asmuo", "juridinis asmuo"],
    required: true,
  },
  contacts: {
    name: {
      type: String,
      required: () => this.type === "fizinis asmuo",
    },
    surname: {
      type: String,
      required: () => this.type === "fizinis asmuo",
    },
    company_id: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: () => this.type === "juridinis asmuo",
    },
    company_name: {
      type: String,
      ref: "Company",
      required: () => this.type === "juridinis asmuo",
    },
    company_code: {
      type: String,
      ref: "Company",
      required: () => this.type === "juridinis asmuo",
    },
    phone: {
      type: String,
      required: true,
    },
    VAT_code: {
      type: String,
      ref: "Company",
      required: () => this.type === "juridinis asmuo",
    },
    address: {
      billing_addresses: [
        {
          name: {
            type: String,
            required: () => this.type === "fizinis asmuo",
          },
          surname: {
            type: String,
            required: () => this.type === "fizinis asmuo",
          },
          company_name: {
            type: String,
            required: () => this.type === "juridinis asmuo",
          },
          company_code: {
            type: String,
            required: () => this.type === "juridinis asmuo",
          },
          phone: {
            type: String,
            required: true,
          },
          address: {
            type: String,
            required: true,
          },
          city: {
            type: String,
            required: true,
          },
          zip_code: {
            type: String,
            required: true,
          },
          region: {
            type: String,
            required: true,
          },
          country: {
            type: String,
            required: true,
          },
        },
      ],
      shipping_addresses: [
        {
          name: {
            type: String,
            required: () => this.type === "fizinis asmuo",
          },
          surname: {
            type: String,
            required: () => this.type === "fizinis asmuo",
          },
          company_name: {
            type: String,
            required: () => this.type === "juridinis asmuo",
          },
          company_code: {
            type: String,
            required: () => this.type === "juridinis asmuo",
          },
          phone: {
            type: String,
            required: true,
          },
          address: {
            type: String,
            required: true,
          },
          city: {
            type: String,
            required: true,
          },
          zip_code: {
            type: String,
            required: true,
          },
          region: {
            type: String,
            required: true,
          },
          country: {
            type: String,
            required: true,
          },
        },
      ],
    },
  },
  cart: {
    items: [
      {
        part_id: {
          type: Schema.Types.ObjectId,
          ref: "Part",
          required: true,
        },
        price: {
          type: Number,
          ref: "Part",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
});

module.exports = mongoose.model("User", userSchema);
