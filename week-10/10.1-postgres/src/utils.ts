// app.js

require("dotenv").config();
import { Client } from "pg";

export async function getClient() {
  const client = new Client(process.env.NEON_DB_URI);

  await client.connect();
  return client;
}
