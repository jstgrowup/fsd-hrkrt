import express from "express";
import { createClient } from "redis";
const app = express();
app.use(express.json());
const client = createClient({ url: "redis://localhost:6379" });
async function startServer() {
  try {
    await client.connect();
    console.log("redis is connected");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  } catch (error) {
    console.log("Failed to connect to redis");
  }
}
startServer();
app.post("/submit", async (req, res) => {
  try {
    const { problemId, userId, code, language } = req.body;
    await client.lPush(
      "submissions",
      JSON.stringify({ problemId, userId, code, language })
    );
    res.json({
      message: "Submission recieved",
    });
  } catch (error) {
    console.log("error:in the submit api", error);
  }
});
