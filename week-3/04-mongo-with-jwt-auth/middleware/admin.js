// Middleware for handling auth
const secret = require("../index");
const jwt = require("jsonwebtoken");
function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const decodedValue = jwt.verify(token, secret);
  if (decodedValue.username) {
    next();
  }
  return res.status(403).json({
    message: "Unauthorised user",
  });
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
