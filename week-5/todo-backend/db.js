const mongoose = require("mongoose");
console.log("process.env.MONGO_URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const Todo = mongoose.model("todos", todoSchema);
module.exports = {
  Todo,
};
