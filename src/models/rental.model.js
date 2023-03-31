const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Types.ObjectId,
    ref: "customer"
  },
  movie: {
    type: mongoose.Types.ObjectId,
    ref: "movie"
  },
  dateOut: {
    type: Date,
    default: Date.now()
  },
  dateReturned: {
    type: Date,
    default: null
  },
  rentalFee: {
    type: Number,   
  }
}, { timestamps: true })

module.exports = mongoose.model('rental', rentalSchema)