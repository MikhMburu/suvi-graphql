// Import libraries
const { Schema, model } = require("mongoose");
// Define schema
const ConsumptionSchema = new Schema({
  reading_date: {
    type: Date,
    default: Date.now,
  },
  readings: [
    {
      inv_number: {
        type: Number,
        required: true,
      },
      tenant_name: {
        type: String,
        required: true,
      },
      hseno: {
        type: Number,
        required: true,
      },
      currentReading: {
        type: Number,
        default: 0,
      },
      previousReading: {
        type: Number,
        default: 0,
      },
      balance_bf: {
        type: Number,
        default: 0,
      },
    },
  ],
});
// Define and export model
module.exports = Consumption = model("consumption", ConsumptionSchema);
