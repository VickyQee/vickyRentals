const {
  handleGetAllCustomers,
  handleGetCustomer,
  handlePostCustomer,
  handleDeleteCustomer,
  handleUpdateCustomer,
} = require("../controllers/customer.controller");

const router = require("express").Router();

// GET ALL CUSTOMERS ROUTE
router.get("/", handleGetAllCustomers);

// GET CUSTOMER ROUTE
router.get("/", handleGetCustomer);

// POST CUSTOMER ROUTE
router.post("/", handlePostCustomer);

// DELETE CUSTOMER ROUTE
router.delete("/:id", handleDeleteCustomer);

// UPDATE CUSTOMER ROUTE
router.patch("/:id", handleUpdateCustomer);

module.exports = router;
