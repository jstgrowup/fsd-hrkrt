interface User {
  id: string;
  name: string;
  age: number;
  username: string;
  email: string;
  password: string;
}
type UpdatedUser = Pick<User, "name" | "age" | "email">;
function updateUser(updatedProps: UpdatedUser) {
  // hit the database to update the user
}
