const express = require("express");
const { postTodo, updateTodo } = require("./types");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("server fine");
});
app.post("/todo", (req, res) => {
  const validatedResponse = postTodo.safeParse(req.body);
  if (!validatedResponse.success) {
    return res.status(411).json(validatedResponse.data);
  }
});
app.get("/todos", (req, res) => {});
app.put("/completed", (req, res) => {
  const validatedResponse = updateTodo.safeParse(req.body);
  if (!validatedResponse.success) {
    return res.status(411).json(validatedResponse.data);
  }
});

app.listen(8000, () => {
  console.log("serrver started");
});
