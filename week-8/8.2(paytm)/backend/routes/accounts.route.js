const { Router } = require("express");
const accountRouter = Router();
const { getBalanceByUser } = require("../helpers/accounts.helpers");
const { startSession } = require("mongoose");
const Account = require("../db/accounts.schema");
const { authMiddleWare } = require("../middlewares/auth.middleware");

accountRouter.get("/balance", authMiddleWare, async (req, res) => {
  const userId = req.userId;
  const balanceDetails = await getBalanceByUser(userId);
  if (!balanceDetails) {
    return res
      .status(411)
      .json({ message: "Failed to fetch the account balance" });
  }
  return res.status(200).json({
    message: "Account Balance fetched successfully",
    data: balanceDetails,
  });
});
accountRouter.post("/transfer", async (req, res) => {
  const session = await startSession();

  session.startTransaction();
  const { amount, to } = req.body;
  const userId = req.userId;
  const account = await Account.findOne({ userId }).session(session);
  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }
  const creditAccount = await Account.findOne({ userId: to }).session(session);
  if (!creditAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid account",
    });
  }
  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);
  await session.commitTransaction();
  return res.status(200).json({
    message: "Transfer successful",
  });
});
module.exports = accountRouter;
