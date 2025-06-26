const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
const userSignup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    //create user
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ email, password: hashedPassword });
    await newUser.save();
    res
      .json({
        message: "User created successfully",
        user: newUser,
      })
      .status(201);
  } catch (error) {
    console.error("Error creating user", error);
    res.json({ message: "Error creating user" }).status(500);
  }
};
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    //JWT token
    const token = jwt.sign({ user }, process.env.JWT_SECRET);
    console.log("token", token);
    res.json({ message: "Login successful", user, token });
  } catch (error) {
    res.json({ message: "Error logging in" }).status(500);
  }
};
const getProfile = async (req, res) => {
  const { email } = req.user;
  const user = await UserModel.findOne({ email });
  res.json({
    user: {
      id: user._id,
      email: user.email,
      courses: user.courses,
    },
  });
};
module.exports = {
  userSignup,
  getProfile,
  userLogin,
};
