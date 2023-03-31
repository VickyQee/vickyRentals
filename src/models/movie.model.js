const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  genre: {
    type: mongoose.Types.ObjectId,
    ref: "genre"
  },
  numberInStock: {
    type: Number,
  },
  dailyRentalRate: {
    type: Number,   
  }
}, { timestamps: true })

module.exports = mongoose.model('movie', movieSchema)