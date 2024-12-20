const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const users = [
  { username: 'teacher1', password: 'password123' },
  { username: 'teacher2', password: 'password456' },
  { username: 'teacher3', password: 'password789' }
];

// Login route with multiple usernames and passwords



const results = async (req, res) => {
  try {
    const { roll, sec, std, pres, vpres } = req.body;
    console.log(req.body)
    if (!roll || !sec || !std || !pres || !vpres) {
      return res.status(700).json("Please provide all fields.");
    }
    const users = await User.find({ roll });
    console.log(pres + vpres)
    const user = await User.create(req.body);
    let savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
  results
};
