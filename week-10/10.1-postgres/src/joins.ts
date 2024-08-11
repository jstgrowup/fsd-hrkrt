import { getClient } from "./utils";

async function getUserAndTodosWithJoin(userId: number) {
  const client = await getClient();
  const jointQuery = `
  SELECT users.email, todos.title, todos.description, todos.done
  FROM users
  JOIN todos ON users.id = todos.user_id
  WHERE users.id=$1
  `;
  const response = await client.query(jointQuery, [userId]);
  console.log(response.rows);
}
getUserAndTodosWithJoin(3);
