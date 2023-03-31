const { response } = require("../utils");
const Rental = require("../models/rental.model");


const handleGetAllRentals = async (req, res) => {
  try {
    const rentals = await Rental.find({}).sort({ dateOut: "asc" }).populate(['customer', 'movie']);
    res.status(200).send(response("All rentals", rentals));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
};

const handlePostRental = async (req, res) => {
  try {
    // ENSURE THERE'S MOVIE IN THE REQUEST BODY
    if(!req.body.movie) throw new Error("Movie ID is required")
    // ENSURE THERE'S MOVIE IN THE REQUEST BODY
    if(!req.body.customer) throw new Error("Customer ID is required")
    // ENSURE THERE'S RENTER-FEE IN THE REQUEST BODY
    if(!req.body.rentalFee) throw new Error("Rental fee is required")

    const rental = await Rental.create(req.body);
    res.status(201).send(response("Rental created!", rental));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}

const handleUpdateRental = async (req, res) => {
  try {
    // ENSURE THERE'S MOVIE ID IN THE REQUEST PARAMS
    if(!req.params.id) throw new Error("Rental id required")

    const rental = await Rental.findByIdAndUpdate(req.params.id, req.body,  { new: true }).populate(['customer', 'movie']);
    res.status(200).send(response("Rental updated!", rental));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}

const handleDeleteRental = async (req, res) => {
  try {
    // ENSURE THERE'S MOVIE ID IN THE REQUEST PARAMS
    if(!req.params.id) throw new Error("Rental id required")

    const rental = await Rental.findByIdAndDelete(req.params.id).populate(['customer', 'movie']);
    res.status(200).send(response("Rental deleted!", rental));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}

module.exports = {
  handleGetAllRentals,
  handlePostRental,
  handleUpdateRental,
  handleDeleteRental
}