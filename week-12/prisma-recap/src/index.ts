import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  try {
    const response = await prisma.user.create({
      data: {
        username,
        password,
        firstName,
        lastName,
      },
    });
    console.log("response:", response);
  } catch (error) {
    console.log("error:", error);
  }
}
// insertUser("test", "test", "test", "test");
async function getTodoViaUser(userId: number) {
  try {
    const response = await prisma.todo.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        user: true,
      },
    });
    console.log("response:", response);
  } catch (error) {
    console.log("error:", error);
  }
}
getTodoViaUser(3);
async function createTodo(
  title: string,
  description: string,
  completed: boolean,
  userId: number
) {
  try {
    const response = await prisma.todo.create({
      data: {
        title,
        description,
        completed,
        userId,
      },
    });
    console.log("response:", response);
  } catch (error) {
    console.log("error:", error);
  }
}
// createTodo("hehe", "huhu", false, 3);
