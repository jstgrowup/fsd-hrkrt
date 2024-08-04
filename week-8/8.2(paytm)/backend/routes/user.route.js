const { Router } = require("express");
const userRouter = Router();
userRouter.post("/sign-up", (req, res) => {
  return res.send("user router reached");
});
userRouter.post("/sign-in", (req, res) => {
  return res.send("user router reached");
});

module.exports = userRouter;
