const Router = require("express");
const userRouter = require("./user.route");
const accountRouter = require("./accounts.route");

const router = Router();
router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;
