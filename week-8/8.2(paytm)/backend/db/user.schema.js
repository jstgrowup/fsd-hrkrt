const { Schema, model } = require("mongoose");

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
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = model("user", UserSchema);
module.exports = User;
