const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String
  },
  isGold: {
    type: Boolean
  },
  phone: {
    type: String
  }
},  { timestamps: true })

module.exports = mongoose.model('customer', customerSchema)