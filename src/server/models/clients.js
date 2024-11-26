const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  phone: { type: Number },
  creditAmount: { type: Number },
  referenceContact:  { type: String } ,
  showCreditModal: { type: Boolean, default: false },
});

module.exports = mongoose.model('Client', ClientSchema);
