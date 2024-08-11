import { getClient } from "./utils";

async function updateTodo(todoId: number) {
  const client = await getClient();
  const updateTodoQuery = "UPDATE todos SET description = $1 WHERE id = $2";
  await client.query(updateTodoQuery, ["learne yuhu", todoId]);
  console.log("updated");
  return true;
}
updateTodo(2);
