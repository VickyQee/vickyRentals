const {
  handleGetAllRentals,
  handlePostRental,
  handleDeleteRental,
  handleUpdateRental,
} = require("../controllers/rental.controller");

const router = require("express").Router();

// GET ALL RENTAL ROUTE
router.get("/", handleGetAllRentals);

// POST RENTAL ROUTE
router.post("/", handlePostRental);

// DELETE RENTAL ROUTE
router.delete("/:id", handleDeleteRental);

// UPDATE RENTAL ROUTE
router.patch("/:id", handleUpdateRental);

module.exports = router;
