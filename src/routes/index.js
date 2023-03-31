const routers = require("express").Router()

// GET ALL ROUTES
const movieRoutes = require("./movie.routes")
const customerRoutes = require("./customer.routes")
const genreRoutes = require("./genre.routes")
const rentalRoutes = require("./rental.routes")
const authRoutes = require("./auth.routes")


// FOR MOVIE ROUTES
routers.use("/auth", authRoutes)
routers.use("/movies", movieRoutes)
routers.use("/genres", genreRoutes)
routers.use("/customers", customerRoutes)
routers.use("/rentals", rentalRoutes)

module.exports = routers