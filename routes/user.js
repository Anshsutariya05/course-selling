const { Router } = require("express");
const { userSignup } = require("../controllers/userController");

const userRouter = Router();


userRouter.post('/signup', userSignup)