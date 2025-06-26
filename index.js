const express = require("express");

const userRouter = require("./src/routes/user");
const connectDB = require("./src/config/db");

const app = express();

app.use(express.json());
app.use(userRouter);
(async () => {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
  }
})();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
