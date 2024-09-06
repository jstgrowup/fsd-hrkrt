import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export async function GET() {
  const user = await client.user.findFirst();
  return NextResponse.json({
    email: user?.email,
    name: user?.name,
  });
}
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const newUser = await client.user.create({
      data: {
        name: reqBody.name,
        password: reqBody.password,
        email: reqBody.email,
      },
    });
    return NextResponse.json({
      message: "You are logged in",
      data: newUser,
    });
  } catch (error) {
    console.log("error:", error);
  }
}
