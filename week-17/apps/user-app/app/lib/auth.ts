import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { signupSchema } from "@repo/zod/schema";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Phone number",
      credentials: {
        phone: {
          label: "Phone number",
          placeholder: "Please enter your phone number",
          type: "text",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Please enter your password",
        },
      },
      async authorize(credentials: any) {
        const validatedResult = signupSchema.safeParse(credentials);
        if (!validatedResult.success) {
          return null;
        }
        const existingUser = await db.user.findFirst({
          where: {
            number: credentials.phone,
          },
        });

        if (existingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.number,
            };
          }
          return null;
        }

        try {
          const hashedPassword = await bcrypt.hash(credentials.password, 10);
          const user = await db.user.create({
            data: {
              number: credentials.phone,
              password: hashedPassword,
            },
          });

          return {
            id: user.id.toString(),
            name: user.name,
            email: user.number,
          };
        } catch (e) {
          console.error(e);
        }

        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    // TODO: can u fix the type here? Using any is bad
    async session({ token, session }: any) {
      session.user.id = token.sub;

      return session;
    },
  },
};
