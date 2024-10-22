import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.AUTH_GOOGLE_SECRETE,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
  },
};
export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
