const express = require("express");
const port = 3000;
const app = express();
app.post("/post-todo", function (req, res) {
  res.send("hello world");
});
app.get("/get-all", function (req, res) {
  res.send("hello world");
});
app.put("/update/:id", function (req, res) {
  res.send("hello world");
});
app.delete("/delete/:id", function (req, res) {
  res.send("hello world");
});
app.listen(port, function () {
  console.log("listening");
});
