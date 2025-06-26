const { Router } = require("express");

const adminRouter = Router();
adminRouter.get("/");
adminRouter.post("/");
adminRouter.get("/:id");
adminRouter.put("/:id");
adminRouter.delete("/:id");
module.exports = adminRouter;
