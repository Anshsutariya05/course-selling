const { Router } = require("express");
const {
  userSignup,
  userLogin,
  getProfile,
} = require("../controllers/userController");
const auth = require("../middleware/auth");

const userRouter = Router();

userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);
userRouter.get("/profile", auth, getProfile);
module.exports = userRouter;
