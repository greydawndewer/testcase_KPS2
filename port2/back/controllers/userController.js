const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const users = [
  { username: 'teacher1', password: 'password123' },
  { username: 'teacher2', password: 'password456' },
  { username: 'teacher3', password: 'password789' }
];


const log = async (req, res) => {
  try {
    id = req.body;
    response = "0";
    users.forEach(function (j) {
      console.log(id)
      console.log(Object.values(id))
      console.log(Object.values(j))
      if (JSON.stringify(Object.values(id)) === JSON.stringify(Object.values(j))) {
        response = "1"
      }
    })
    console.log(response)
    res.send(response)
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};


const vote = async (req, res) => {
  try {
    const users = await User.find({}).select('-_id -__v');
    if (!users) {
      return res.status(400).json("Wrong credentials..");
    }

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};


module.exports = {
  vote, 
  log
};
