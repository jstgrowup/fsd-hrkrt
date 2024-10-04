import NextAuth from "next-auth";
import { authOptions } from "../../../lib/auth";

const handler = NextAuth({
  ...authOptions,
  pages: {
    signIn: "/auth",
  },
});

export { handler as GET, handler as POST };
