import { createClient } from "redis";

const client = createClient();
async function main() {
  try {
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
  } catch (error) {
    console.log("error:to connect to redis", error);
  }
}
main();
