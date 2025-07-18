const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: String,
      ref: "Course",
    },
  ],
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
