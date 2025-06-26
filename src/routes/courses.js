const { Router } = require("express");

const courseRouter = Router();
courseRouter.get("/");
courseRouter.post("/");
courseRouter.get("/:id");
courseRouter.put("/:id");
courseRouter.delete("/:id");
module.exports = courseRouter;
