const { response } = require("../utils");
const Movie = require("../models/movie.model");


const handleGetAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({}).populate("genre");
    res.status(200).send(response("All movies", movies));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
};

const handlePostMovie = async (req, res) => {
  try {
    // ENSURE THERE'S MOVIE TITLE IN THE REQUEST BODY
    if(!req.body.title) throw new Error("Title is required")
    // ENSURE THERE'S MOVIE GENRE IN THE REQUEST BODY
    if(!req.body.genre) throw new Error("Genre is required")

    const movie = await Movie.create(req.body);
    res.status(201).send(response("Movie created!", movie));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}

const handleUpdateMovie = async (req, res) => {
  try {
    // ENSURE THERE'S MOVIE ID IN THE REQUEST PARAMS
    if(!req.params.id) throw new Error("Movie id required")

    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("genre");
    res.status(200).send(response("Movie updated!", movie));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}

const handleDeleteMovie = async (req, res) => {
  try {
    // ENSURE THERE'S MOVIE ID IN THE REQUEST PARAMS
    if(!req.params.id) throw new Error("Movie id required")

    const movie = await Movie.findByIdAndDelete(req.params.id).populate("genre");
    res.status(200).send(response("Movie deleted!", movie));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}

module.exports = {
  handleGetAllMovies,
  handlePostMovie,
  handleUpdateMovie,
  handleDeleteMovie
}