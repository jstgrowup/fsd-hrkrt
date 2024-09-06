"use server";
import client from "@/db";
export async function CreateBlogServerAction(
  name: string,
  password: string,
  email: string
) {
  try {
    const createUser = await client.user.create({
      data: {
        name: name,
        password: password,
        email: email,
      },
    });
    return createUser;
  } catch (error) {
    return false;
  }
}
export async function GetBulkBlogsServerAction(
  password: string,
  email: string
) {
  try {
    const foundUser = await client.user.findFirst({
      where: {
        password,
        email,
      },
    });
    return foundUser;
  } catch (error) {
    return false;
  }
}
