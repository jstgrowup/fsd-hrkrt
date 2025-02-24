const User = require("../db/user.schema");
const findExistingUserByUserName = (email) => {
  return User.findOne({ email });
};
const createNewUser = (userInfo) => {
  return User.create(userInfo);
};
const findUserByUserNameAndPass = (username, password) => {
  return User.findOne({ username, password });
};
const findUserById = (id) => {
  return User.findById(id);
};
const findByNameUpdatePass = (userId, firstName, lastName, password) => {
  return User.findByIdAndUpdate(
    userId,
    { $set: { password, firstName, lastName } },
    { new: true }
  );
};
const updatePasswordByName = (userId, password, firstName, lastName) => {
  return User.findByIdAndUpdate(
    userId,
    {
      $set: { password, firstName, lastName },
    },
    { new: true }
  );
};
const getAllUsersInBulk = (filter) => {
  return User.find({
    $or: [{ firstName: { $regex: filter }, lastName: { $regex: filter } }],
  }).select("username firstName lastName _id");
};
module.exports = {
  findExistingUserByUserName,
  createNewUser,
  findUserByUserNameAndPass,
  findUserById,
  updatePasswordByName,
  findByNameUpdatePass,
  getAllUsersInBulk,
};
