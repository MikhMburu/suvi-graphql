const { Schema, model } = require("mongoose");

const TenantSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  hseno: {
    type: Number,
    required: true,
  },
  checkin: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
  rent: {
    type: Number,
    default: 0,
  },
  checkout: {
    type: String,
  },
});
module.exports = Tenant = model("tenant", TenantSchema);
