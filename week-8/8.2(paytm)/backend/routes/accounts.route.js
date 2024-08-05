const { Router } = require("express");
const accountRouter = Router();
const { transferZodSchema } = require("../zod/accounts.zod");
const {
  debitHelper,
  creditHelper,
  getBalanceByUser,
} = require("../helpers/accounts.helpers");
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
      .json({ message: "Failed to fetch the account balancec" });
  }
  return res.status(200).json({
    message: "Account Balance fetched successfully",
    data: balanceDetails,
  });
});
module.exports = accountRouter;
