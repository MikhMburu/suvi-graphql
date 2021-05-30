const { Schema, model } = require("mongoose");

const HouseSchema = new Schema({
  hseno: {
    type: Number,
    required: true,
  },
  kplc_no: {
    type: String,
    required: true,
  },
  occupied: {
    type: Boolean,
    default: false,
  },
});
module.exports = House = model("house", HouseSchema);
