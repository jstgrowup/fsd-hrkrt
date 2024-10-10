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
      async authorize(credentials: any) {
        const validatedResult = signupSchema.safeParse(credentials);
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter your email and password");
        }
        // if (!validatedResult.success) {
        //   return null;
        const user = {
          id: "1",
          email: credentials.email,
          password: credentials.password,
        };

        if (!user) {
          throw new Error("No user found");
        }

        return user;
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async session({ token, session }: any) {
      session.user = token;
      return session;
    },
    async redirect({ url, baseUrl }: any) {
      if (url.startsWith(baseUrl)) {
        return "/";
      }
      return baseUrl;
    },
  },
};
