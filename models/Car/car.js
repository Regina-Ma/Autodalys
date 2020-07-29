const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema({
  make_id: {
    type: Schema.Types.ObjectId,
    ref: "Make",
    required: true,
  },
  series_id: {
    type: Schema.Types.ObjectId,
    ref: "Series",
    required: false,
  },
  model_id: {
    type: Schema.Types.ObjectId,
    ref: "Model",
    required: true,
  },
  production_year: {
    type: String,
    required: true,
  },
  production_start: {
    type: String,
    required: true,
  },
  production_end: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
  steering_wheel_position: {
    type: String,
    enum: ["L", "R"], // L - left; R - right
    required: true,
  },
  transmission: {
    type: String,
    enum: ["M", "A"], // M - manual; A - automatic
    required: true,
  },
  body_type: {
    type: String,
    enum: [
      "Other",
      "Sedan",
      "Hatchback",
      "Caravan",
      "Minivan",
      "SUV",
      "Coupe",
      "Commercial",
      "Cabriolet",
      "Roadster",
      "Limousine",
      "Pickup",
    ],
    required: true,
  },
  driving_wheels: {
    type: String,
    enum: ["F", "R", "A"], // F - front; R - rear; A - all wheel drive
    required: true,
  },
  engine_id: {
    type: Schema.Types.ObjectId,
    ref: "Engine",
    required: true,
  },
});

module.exports = mongoose.model("Car", carSchema);
