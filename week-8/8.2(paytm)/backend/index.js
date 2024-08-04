require("dotenv").config();
const express = require("express");
const dbConnect = require("./db/dbConnect");
const router = require("./routes");
const app = express();
app.use(express.json());
app.use("/api/v1", router);
app.listen(() => {
  dbConnect()
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error("Database connection error", err);
    });
  console.log(`Server started on port `);
});
