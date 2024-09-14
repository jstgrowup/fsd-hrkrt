const jwt = require("jsonwebtoken");
const tokenFromBody = (body) => {
  return jwt.sign(body, process.env.JWT_SECRET);
};
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
module.exports = {
  tokenFromBody,
  verifyToken,
};
