"use server";
import db from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { v4 as uuidv4 } from "uuid";
export async function createOnRampTransactions(
  amount: number,
  provider: string
) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;
  const tokenFromBank = uuidv4();
  if (!userId) {
    return { message: "Unauthorized user" };
  }
  const newTransaction = await db.onRampTransaction.create({
    data: {
      status: "Processing",
      userId,
      amount,
      startTime: new Date(),
      provider,
      token: tokenFromBank,
    },
  });
  if (newTransaction) {
    return {
      message: "Onramp transaction created successfully",
    };
  }
}
