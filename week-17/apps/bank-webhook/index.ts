import express from "express";
const app = express();
app.post("/hdfc/payment", (req, res) => {
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };
});
