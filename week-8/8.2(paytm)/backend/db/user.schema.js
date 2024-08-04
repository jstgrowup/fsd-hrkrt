const { Schema, Model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  firstName: {
    type: String,
    required: true,
    minLength: 6,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 6,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = Model("user", UserSchema);
module.exports = User;
