const User = require("../models/user.model");
const { response, except } = require("../utils");
const bcrypt = require("bcrypt");
const { generateAuthToken } = require("../utils/token");

// HANDLE USER'S REGISTRATION
const handleRegister = async (req, res) => {
  try {
    if (!req.body.firstname) throw new Error("First name is required");
    if (!req.body.lastname) throw new Error("Last name is required");
    if (!req.body.email) throw new Error("Email is required");
    if (!req.body.password) throw new Error("Password is required");

    // CHECK IF USER ALREADY EXISTS
    const exists = await User.findOne({ email: req.body.email });
    if (exists) throw new Error("User already exists");

    // HASH THE PASSWORD
    req.body.password = await bcrypt.hash(req.body.password, 10);

    // CREATE NEW USER
    let user = await User.create(req.body);
    user = except(user.toObject(), "password", "__v")
    
    res.status(200).send(response("Account Created!!", user));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
};

const handleSignIn = async (req, res) => {
  try {
    if (!req.body.email) throw new Error("Email is required");
    if (!req.body.password) throw new Error("Password is required");

    // CHECK IF USER EXISTS
    let user = await User.findOne(
      { email: req.body.email },
      { __v: 0, createdAt: 0, updatedAt: 0 }
    );
    if (!user) throw new Error("Incorrect Crediential");

    if(!await bcrypt.compare(req.body.password, user.password)) throw new Error("Incorrect Crediential");

    // GENERATE TOKEN
    const token = generateAuthToken({ userId: user._id, role: user.role });
    
    // REMOVE PASSWORD FROM THE RESPONSE DATA
    user = except(user.toObject(), "password")
    
    // SEND RESPONSE
    res.status(200).send(response("Logged in successfully", { user, token }));
  } catch (error) {
    res.status(400).send(response(error.message, null, false));
  }
};


module.exports = {
  handleRegister,
  handleSignIn,
};
