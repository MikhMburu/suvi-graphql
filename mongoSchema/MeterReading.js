const { Schema, model } = require("mongoose");

const MReadingSchema = new Schema({
  tenant: {
    type: Schema.Types.ObjectId,
    ref: "tenant",
  },
  date: {
    type: String,
    required: true,
  },
  reading: {
    type: Number,
    required: true,
  },
});
module.exports = MeterReading = model("meter_reading", MReadingSchema);
