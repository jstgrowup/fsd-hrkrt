const { Router } = require("express");
const accountRouter = Router();
const { transferZodSchema } = require("../zod/accounts.zod");
const {
  debitHelper,
  creditHelper,
  getBalanceByUser,
} = require("../helpers/accounts.helpers");
const { startSession } = require("mongoose");
const Account = require("../db/accounts.schema");
accountRouter.post("/create-transaction", async (req, res) => {
  const transactionBody = req.body;
  const validatedUser = transferZodSchema.safeParse(transactionBody);
  if (!validatedUser.success) {
    return res.status(411).json({ data: validatedUser.data });
  }
  const debitedResponse = await debitHelper(
    transactionBody.fromAccount,
    transactionBody.amount
  );
  if (!debitedResponse) {
    return res.status(411).json({ message: "Insufficient balance" });
  }
  const creaditResponse = await creditHelper(
    transactionBody.toAccountId,
    transactionBody.amount
  );
  if (!creaditResponse) {
    res.status(200).json({ message: "Creadit unsuccessful" });
  }
  return res.status(200).json({
    message: "Transfer successful",
  });
});
accountRouter.get("/balance", async (req, res) => {
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
accountRouter.get("/transfer", async (req, res) => {
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
