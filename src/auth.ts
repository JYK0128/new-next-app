import NextAuth from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

export interface AdapterUser {
  id_token: string
}

export interface User {
  id_token: string
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Keycloak],
  callbacks: {
    async jwt({token, account}) {
      if (account?.id_token) {
        token["id_token"] = account?.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user["id_token"] = token["id_token"];
      return session;
    },
  },
});
