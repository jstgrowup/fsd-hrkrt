const Account = require("../db/accounts.schema");

const debitHelper = (fromAccountId, amount) => {
  return Account.findByIdAndUpdate(
    fromAccountId,
    {
      $inc: { balance: -amount },
    },
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
const putBalanceWhileSignup = (userId, amount) => {
  return Account.create({ userId, amount });
};
const getBalanceByUser = (userId) => {
  return Account.findOne({ userId });
};
module.exports = {
  putBalanceWhileSignup,
  debitHelper,
  creditHelper,
  getBalanceByUser,
};
