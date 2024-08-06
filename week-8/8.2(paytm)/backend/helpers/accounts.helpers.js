const Account = require("../db/accounts.schema");

const debitHelper = (fromAccountId, amount) => {
  return Account.findByIdAndUpdate(
    { _id: fromAccountId, balance: { $gte: amount } },
    { $inc: { balance: -amount } },
    { new: true }
  );
};
const creditHelper = (toAccountId, amount) => {
  return Account.findByIdAndUpdate(
    toAccountId,
    {
      $inc: { balance: amount },
    },
    { new: true }
  );
};
const putBalanceWhileSignup = (userId, balance) => {
  return Account.create({ userId, balance });
};
const getBalanceByUser = (userId) => {
  return Account.findOne({ userId }).select("balance");
};
module.exports = {
  putBalanceWhileSignup,
  debitHelper,
  creditHelper,
  getBalanceByUser,
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmIyNDhlZmI4MDFhZDY1NWRlODNjMTciLCJpYXQiOjE3MjI5NjAxMTF9.FBjUVf7T_txURXYV1Q7Ose3AxhUILCqeYnsGgebV0WE
