const { Schema, model, Types } = require("mongoose");

const AccountsSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: "user",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});
const Account = model("account", AccountsSchema);
module.exports = Account;
