const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:9e76OXmkeoPn1pG6@cluster0.ffa4elf.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const Todo = mongoose.model("todos", todoSchema);
module.exports = {
  Todo,
};
