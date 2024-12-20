const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose
      .connect("mongodb+srv://Ganime_Dewer:jamshedpur_1000@ganimeindustries1000.rkmonvc.mongodb.net/data")
      .then(() => console.log("connected to mongo db"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;   
