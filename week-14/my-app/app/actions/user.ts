"use server";
import client from "@/db";
import { signToken } from "@/utils/services/token.service";
export async function SingupServerAction(
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
    const token = signToken({ id: createUser.id });
    return {
      message: "Signed up successfully",
      token: token,
    };
  } catch (error) {
    return false;
  }
}
export async function SinginServerAction(password: string, email: string) {
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
