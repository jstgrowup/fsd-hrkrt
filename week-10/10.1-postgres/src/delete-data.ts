import { getClient } from "./utils";

async function deleteTodo(todoId: number) {
  const client = await getClient();
  const deleteTodoQuery = "DELETE FROM todos WHERE id = $1";
  await client.query(deleteTodoQuery, [todoId]);
  console.log("todo deleted successfully");
}
deleteTodo(2);
