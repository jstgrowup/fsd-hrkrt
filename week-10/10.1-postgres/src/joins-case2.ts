import { getClient } from "./utils";

async function getAllTodosWithUserDetails() {
  const client = await getClient();
  const joinQuery = `
  SELECT todos.*, users.email, users.password
  FROM todos
  JOIN users ON todos.user_id=users.id;
  `;
  const response = await client.query(joinQuery);
  console.log(response.rows);
}
getAllTodosWithUserDetails();
