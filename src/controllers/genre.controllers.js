const Genre = require("../models/genre.model");
const { response } = require("../utils");


const handleGetAllGenres = async (req, res) => {
  try {
    // GET ALL CUSTOMERS, SORTED BY NAME IN ASCENDING ORDER
    const genres = await Genre.find({}).sort({ name: "asc" }).exec();
    res.status(200).send(response("All genres", genres));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}


const handleGetGenre = async (req, res) => {
  try {
    // ENSURE THERE'S CUSTOMER ID IN THE REQUEST PARAMS
    if(!req.params.id) throw new Error("Genre id required")

    const genre = await Genre.find({ _id: req.params.id });
    res.status(200).send(response("Genre", genre));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}


const handlePostGenre = async (req, res) => {
  try {
    // ENSURE THERE'S NAME IN THE REQUEST BODY
    if(!req.body.name) throw new Error("Name is required")

    // CREATE A NEW CUSTOMER
    const genre = await Genre.create(req.body);
    res.status(200).send(response("Genre created!", genre));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}


const handleUpdateGenre = async (req, res) => {
  try {
    // ENSURE THERE'S CUSTOMER ID IN THE REQUEST PARAMS
    if(!req.params.id) throw new Error("Genre id required")

    const genre = await Genre.findByIdAndUpdate(req.params.id, req.body,  { new: true });
    res.status(200).send(response("Genre updated!", genre));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}


const handleDeleteGenre = async (req, res) => {
  try {
    // ENSURE THERE'S CUSTOMER ID IN THE REQUEST PARAMS
    if(!req.params.id) throw new Error("Genre id required")

    const genre = await Genre.findByIdAndDelete(req.params.id);
    res.status(200).send(response("Genre deleted!", genre));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
}


module.exports = {
  handleGetAllGenres,
  handlePostGenre,
  handleUpdateGenre,
  handleDeleteGenre,
  handleGetGenre
}