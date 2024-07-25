require("dotenv").config();
const express = require("express");
const { postTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server fine");
});
app.post("/todo", async (req, res) => {
  const requestTodo = req.body;
  const validatedResponse = postTodo.safeParse(req.body);
  if (!validatedResponse.success) {
    return res.status(411).json(validatedResponse.data);
  }
  await Todo.create({
    title: requestTodo.title,
    description: requestTodo.description,
    completed: false,
  });
  return res.json({
    message: "Todo Created",
  });
});
app.get("/todo", async (req, res) => {
  const todo = await Todo.find({});
  return res.json({
    data: todo,
    message: "Todos fetched successfully",
  });
});
app.put("/completed", async (req, res) => {
  const validatedResponse = updateTodo.safeParse(req.body);
  if (!validatedResponse.success) {
    return res.status(411).json(validatedResponse.data);
  }
  await Todo.findByIdAndUpdate(req.body.id, { completed: true });
  return res.json({
    message: "Todo updated successfully",
  });
});

app.listen(8000, () => {
  console.log("serrver started");
});
