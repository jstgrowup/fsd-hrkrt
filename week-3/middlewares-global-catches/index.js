const express = require("express");
const { z } = require("zod");
const app = require("express")();
const schema = z.array(z.number());
cpnst;
app.use(express.json());
app.post("/health", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  console.log("response:", response);
  if (!response.success) {
    res.status(411).json({
      msg: "Invalid input",
    });
  }
  res.send(response);
});
app.listen(8000, () => {
  console.log("server running");
});
