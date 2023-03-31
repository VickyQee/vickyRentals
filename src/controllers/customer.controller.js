const Customer = require("../models/customer.model");
const { response } = require("../utils");


const handleGetAllCustomers = async (req, res) => {
  try {
    // GET ALL CUSTOMERS, SORTED BY NAME IN ASCENDING ORDER
    const customers = await Customer.find({}).sort({ name: "asc" }).exec();
    res.status(200).send(response("All customers", customers));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}


const handleGetCustomer = async (req, res) => {
  try {
    // ENSURE THERE'S CUSTOMER ID IN THE REQUEST PARAMS
    if(!req.params.id) throw new Error("Customer id required")

    const customer = await Customer.find({ _id: req.params.id });
    res.status(200).send(response("Customer", customer));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}


const handlePostCustomer = async (req, res) => {
  try {
    // ENSURE THERE'S NAME IN THE REQUEST BODY
    if(!req.body.name) throw new Error("Name is required")

    // CREATE A NEW CUSTOMER
    const customer = await Customer.create(req.body);
    res.status(200).send(response("Customer created!", customer));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}


const handleUpdateCustomer = async (req, res) => {
  try {
    // ENSURE THERE'S CUSTOMER ID IN THE REQUEST PARAMS
    if(!req.params.id) throw new Error("Customer id required")

    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(response("Customer updated!", customer));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}


const handleDeleteCustomer = async (req, res) => {
  try {
    // ENSURE THERE'S CUSTOMER ID IN THE REQUEST PARAMS
    if(!req.params.id) throw new Error("Customer id required")

    const customer = await Customer.findByIdAndDelete(req.params.id);
    res.status(200).send(response("Customer deleted!", customer));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}


module.exports = {
  handleGetAllCustomers,
  handlePostCustomer,
  handleUpdateCustomer,
  handleDeleteCustomer,
  handleGetCustomer
}