import express from "express";
const app = express();
import { Sum } from "@jstgrwup/sum";

app.get("/", (req, res) => {
  const addedvalue = Sum(2, 4);
  console.log("addedvalue:", addedvalue);
  res.send("all good");
});
app.listen(8000, () => {
  console.log("server started");
});
