const { Schema, model } = require("mongoose");

const InvoiceSchema = new Schema({
  inv_date: {
    type: String,
    required: true,
  },
  bills: [
    {
      _id: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
      },
      email: {
        type: String,
      },

      tenant: {
        type: String,
      },
      hseno: {
        type: Number,
      },
      bal_bf: {
        type: Number,
        default: 0,
      },
      current_mreading: {
        type: Number,
      },
      prev_mreading: {
        type: Number,
      },
      consumption: {
        type: Number,
      },
      litres_consumed: {
        type: Number,
      },
      other_charges: {
        type: Number,
        default: 0,
      },
      amount_owed: {
        type: Number,
      },
    },
  ],
});

module.exports = Invoice = model("invoice", InvoiceSchema);
