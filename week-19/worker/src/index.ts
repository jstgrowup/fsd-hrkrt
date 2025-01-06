import express from "express";
import { createClient } from "redis";
const app = express();
app.use(express.json());
const client = createClient({ url: "redis://localhost:6379" });
async function main() {
  await client.connect();
  while (1) {
    const response = await client.brPop("submissions", 0);
    console.log("response:in the brpop", response);
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve;
      }, 1000)
    );
    console.log("Processed users submissions");
  }
}
main();
