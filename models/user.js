const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  agent: {
    type: String,
  },
  userType: {
    type: String,
    default: 0,
  },
  policy_mode: {
    type: Number
  },
  producer : {
    type: String
  },
  policy_number: {
    type: String
  },
  premium_amount_written: {
    type: Number
  },
  premium_amount : {
    type: Number
  },
  policy_type: {
    type: Number
  },
  company_name: {
    type: String
  },
  category_name: {
    type: String
  },
  policy_start_date: {
    type: Date
  },
  policy_end_date: {
    type: Date
  },
  csr: {
    type: String
  },
  account_name: {
    type: String
  },
  email: {
    type: String
  },
  gender: {
    type: String
  },
  firstname: {
    type: String
  },
  city: {
    type: String
  },
  account_type: {
    type: String
  },
  phone: {
    type: Number
  },
  address: {
    type: String
  },
  state: {
    type: String
  },
  zip : {
    type: Number
  },
  dob: {
    type: Date
  },
  primary: {
    type: String
  },
  Applicant_ID: {
    type: String
  },
  agency_id: {
    type: Number
  },
  hasActive_ClientPolicy: {
    type: Boolean
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;