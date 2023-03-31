const {
  handleGetAllMovies,
  handlePostMovie,
  handleDeleteMovie,
  handleUpdateMovie,
} = require("../controllers/movie.controller");

const router = require("express").Router();

// GET ALL MOVIE ROUTE
router.get("/", handleGetAllMovies);

// POST MOVIE ROUTE
router.post("/", handlePostMovie);

// DELETE MOVIE ROUTE
router.delete("/:id", handleDeleteMovie);

// UPDATE MOVIE ROUTE
router.patch("/:id", handleUpdateMovie);

module.exports = router;
