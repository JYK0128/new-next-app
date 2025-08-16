import { decodeJwt } from "jose";
import NextAuth from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

import { NextError } from "@/lib/error";
import prisma, { withCreate } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Keycloak],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.id_token) {
        token["idToken"] = account?.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (!token["idToken"]) throw new NextError({ code: "UNAUTHORIZED" });
      const payload = decodeJwt(token["idToken"]);
      if (!payload.sub) throw new NextError({ code: "UNAUTHORIZED" });

      session.user["idToken"] = token["idToken"];
      return session;
    },
    async signIn({ profile }) {
      if (!profile?.sub || !profile?.email || !profile?.nickname) throw new NextError({ code: "UNAUTHORIZED" });
      await prisma.appUser.upsert({
        where: {
          id: profile.sub,
        },
        create: {
          id: profile.sub,
          email: profile.email,
          nickname: profile.nickname,
          lastLoginAt: new Date(),
          ...withCreate(profile.sub),
        },
        update: {
          lastLoginAt: new Date(),
        },
      });

      return true;
    },
  },
});
