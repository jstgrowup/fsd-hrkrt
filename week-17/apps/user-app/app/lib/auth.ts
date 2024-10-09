import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { signupSchema } from "@repo/zod/schema";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // JU368GQTCR7HUA4HWNFZKUTC
      async authorize(credentials: any) {
        console.log("credentials:", credentials);
        const validatedResult = signupSchema.safeParse(credentials);
        // if (!validatedResult.success) {
        //   return null;

        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async session({ token, session }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
};
