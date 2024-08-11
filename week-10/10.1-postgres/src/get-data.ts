import { getClient } from "./utils";

async function getUsers() {
  const client = await getClient();
  const selectedUsersText = "SELECT * FROM users";
  const usersRes = await client.query(selectedUsersText);

  for (let user of usersRes.rows) {
    console.log(`ID : ${user.id} EMail ${user.email}`);
  }
}
getUsers();
async function getUserFromEmail(email: string) {
  const client = await getClient();
  const selectedUsersText = "SELECT * FROM users WHERE email = $1";

  const usersRes = await client.query(selectedUsersText, [email]);

  for (let user of usersRes.rows) {
    console.log(` single : ${user.id} EMail ${user.email}`);
  }
}
getUserFromEmail("subham@byldd.com");
async function getTodosForUser(userId: number) {
  const client = await getClient();
  const selectedTodosText = "SELECT * FROM todos WHERE user_id = $1";
  const todosRes = await client.query(selectedTodosText, [userId]);
  console.log(todosRes.rows);
}
getTodosForUser(2);
