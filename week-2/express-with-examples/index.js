const app = require("express")();
app.get("/", function (req, res) {
  res.send("hey");
});
app.listen(3000, () => {
  console.log("server started");
});
