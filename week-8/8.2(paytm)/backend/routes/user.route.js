const { Router } = require("express");
const userRouter = Router();

const {
  signupZodSchema,
  signInZodSchema,
  resetPassZodSchema,
} = require("../zod/user.zod");
const {
  findExistingUserByUserName,
  createNewUser,
  findUserByUserNameAndPass,
  getAllUsersInBulk,
  updatePasswordByName,
} = require("../helpers/user.helpers");
const { tokenFromBody } = require("../utils/jwt");
const { putBalanceWhileSignup } = require("../helpers/accounts.helpers");
const { authMiddleWare } = require("../middlewares/auth.middleware");
userRouter.post("/sign-up", async (req, res) => {
  const userBody = req.body;
  console.log("userBody:", userBody);

  const validatedUser = signupZodSchema.safeParse(userBody);
  console.log("validatedUser:", validatedUser);

  if (!validatedUser.success) {
    return res.status(411).json({ data: validatedUser.data });
  }
  const existingUser = await findExistingUserByUserName(userBody.email);
  if (existingUser) {
    return res.status(400).json({ message: "user already exists" });
  }
  const newCreatedUser = await createNewUser(userBody);
  if (!newCreatedUser) {
    return res
      .status(400)
      .json({ message: "Something went wrong while creating the user" });
  }
  const token = tokenFromBody({ userId: newCreatedUser._id });

  await putBalanceWhileSignup(
    newCreatedUser._id,
    Math.floor(Math.random() * 10000) + 1
  );
  return res.status(200).json({ message: "User created successfully", token });
});
userRouter.post("/sign-in", async (req, res) => {
  const userBody = req.body;
  const validatedUser = signInZodSchema.safeParse(userBody);
  if (!validatedUser.success) {
    return res.status(411).json({ data: validatedUser.data });
  }
  const existingUser = await findUserByUserNameAndPass(
    userBody.username,
    userBody.password
  );
  if (existingUser) {
    const token = tokenFromBody({ userId: existingUser._id });
    return res
      .status(200)
      .json({ message: "User signed in successfully", token });
  }

  return res.status(411).json({ message: "Error while logging in" });
});
userRouter.put("/update-info/:userId", authMiddleWare, async (req, res) => {
  try {
    const userBody = req.body;

    const userId = req.userId;
    const validatedUser = resetPassZodSchema.safeParse(userBody);

    if (!validatedUser.success) {
      return res.status(411).json({ data: validatedUser.data });
    }
    const updatedUser = await updatePasswordByName(
      userId,
      userBody.password,
      userBody.firstName,
      userBody.lastName
    );

    if (updatedUser) {
      return res.status(200).json({ message: "Updated successfully" });
    }
    return res
      .status(411)
      .json({ message: "Error while updating information" });
  } catch (error) {
    console.log("error:", error);
  }
});
userRouter.get("/bulk", async (req, res) => {
  const filter = req.query.harkirat;
  const usersData = await getAllUsersInBulk(filter);
  res
    .status(411)
    .json({ message: "Error while updating information", users: usersData });
});
module.exports = userRouter;
