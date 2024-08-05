const zod = require("zod");
const signupZodSchema = zod.object({
  username: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});
const signInZodSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});
const resetPassZodSchema = zod.object({
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});
module.exports = {
  signupZodSchema,
  signInZodSchema,
  resetPassZodSchema,
};
