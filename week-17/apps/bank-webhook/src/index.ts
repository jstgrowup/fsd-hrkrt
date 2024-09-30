import express from "express";
const app = express();
import db from "@repo/db/client";
app.post("/hdfc/payment", async (req, res) => {
  try {
    const paymentInformation = {
      token: req.body.token,
      userId: req.body.user_identifier,
      amount: req.body.amount,
    };
    await db.$transaction([
      db.balance.update({
        where: {
          userId: paymentInformation.userId,
        },
        data: {
          amount: {
            increment: paymentInformation.amount,
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);
    res.json({
      message: "Captured the payment",
    });
  } catch (error) {
    res.status(411).json({
      message: "Something went wrong while capturing the transaction",
    });
  }
});
app.listen(3003, () => {
  console.log("webhook server up and running at 3003");
});
