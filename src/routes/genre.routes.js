const {
  handleGetAllGenres,
  handlePostGenre,
  handleDeleteGenre,
  handleUpdateGenre,
} = require("../controllers/genre.controllers");

const router = require("express").Router();

// GET ALL GENRE ROUTE
router.get("/", handleGetAllGenres);

// POST GENRE ROUTE
router.post("/", handlePostGenre);

// DELETE GENRE ROUTE
router.delete("/:id", handleDeleteGenre);

// UPDATE GENRE ROUTE
router.patch("/:id", handleUpdateGenre);

module.exports = router;
