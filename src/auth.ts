import NextAuth from "next-auth";
import Keycloak from "next-auth/providers/keycloak";


export const { handlers, auth } = NextAuth({
  providers: [Keycloak],
  // callbacks: {
  //   async jwt({ token, account, profile }) {
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     return session;
  //   },
  // },
});
