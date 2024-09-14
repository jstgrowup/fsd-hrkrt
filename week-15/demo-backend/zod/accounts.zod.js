const zod = require("zod");
const transferZodSchema = zod.object({
  fromAccountId: zod.string(),
  toAccountId: zod.string(),
  amount: zod.string(),
});

module.exports = {
  transferZodSchema,
};
