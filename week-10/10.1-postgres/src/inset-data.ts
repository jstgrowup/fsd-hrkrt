import { getClient } from "./utils";

async function createEntries() {
  const client = await getClient();
  const insertUsertext =
    "INSERT INTO users (email,password) VALUES ($1,$2) RETURNING id";
  const userValues = ["subham@byldd.com", "deysubham"];
  const response = await client.query(insertUsertext, userValues);
  const insertTodoQuery =
    "INSERT INTO todos (title,description,user_id,done) VALUES ($1,$2,$3,$4) RETURNING id";
  const todoVAlues = ["do coding", "js and rust", response.rows[0].id, false];
  await client.query(insertTodoQuery, todoVAlues);
  console.log("entries created");
  return true;
}
createEntries();
