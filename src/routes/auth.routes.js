const {
  handleRegister,
  handleSignIn,
} = require("../controllers/auth.controller");

const router = require("express").Router();

// POST REGISTER ROUTE
router.post("/signup", handleRegister);

// POST LOGIN ROUTE
router.post("/signin", handleSignIn);

module.exports = router;
