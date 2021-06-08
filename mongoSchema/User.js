// Import libraries
const { Schema, model } = require("mongoose");
// Import Files
// Define variables
// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String,
  },
  other_names: {
    type: String,
  },
  national_id: {
    type: String,
  },
  designation: {
    type: String,
    default: "Tenant",
  },
  username: {
    type: String,
    maxLength: 10,
  },
  password: {
    type: String,
  },
  email: {
    type: [String],
  },
  phone: {
    type: [String],
  },
  description: {
    type: String,
  },
  next_of_kin: {
    name: { type: String },
    relation: { type: String },
    phone: { type: String },
  },
});
// Create and Export model
module.exports = User = model("user", UserSchema);
