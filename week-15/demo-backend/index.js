require("dotenv").config();
const express = require("express");
const dbConnect = require("./db/dbConnect");
const router = require("./routes");
const app = express();
const cors = require("cors");
const User = require("./db/user.schema");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/v1", router);
app.get("/", async (req, res) => {
  const users = await User.find({});

  return res.json(users);
});

app.listen(8001, () => {
  dbConnect()
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error("Database connection error", err);
    });
  console.log(`Server started on port 8001`);
});
