import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export function GET() {
  return Response.json({
    email: "subham@byldd.com",
    name: "subham",
  });
}
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    console.log("reqBody:", reqBody);
    const newUser = await client.user.create({
      data: {
        name: reqBody.name,
        password: reqBody.password,
        email: reqBody.email,
      },
    });
    return Response.json({
      message: "You are logged in",
      data: newUser,
    });
  } catch (error) {
    console.log("error:", error);
  }
}
