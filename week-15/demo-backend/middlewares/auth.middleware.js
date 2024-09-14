const { findUserById } = require("../helpers/user.helpers");
const { verifyToken } = require("../utils/jwt");

const authMiddleWare = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.status(403).json({ message: "Forbidden Access" });
  }
  if (!authorizationHeader.includes("Bearer")) {
    return res.status(403).json({ message: "Forbidden Access" });
  }
  const extractedHeader = authorizationHeader.split(" ")[1];
  const decodedToken = verifyToken(extractedHeader);
  const foundUser = await findUserById(decodedToken.userId);
  if (!foundUser) {
    return res.status(403).json({ message: "Forbidden Access" });
  }
  req.userId = foundUser._id;
  next();
};
module.exports = {
  authMiddleWare,
};
