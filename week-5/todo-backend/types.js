const zod = require("zod");
const postTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});
const updateTodo = zod.object({
  id: zod.string(),
});
module.exports = {
  postTodo,
  updateTodo,
};
