const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
    return conn;
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
