const mongoose = require('mongoose');
require("dotenv").config()

module.exports = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log("Couldn't connect to database ", error);
  }
}