import NextAuth from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

import { NextError } from "@/lib/error";
import prisma, { uuid, withCreate, withUpdate } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Keycloak],
  callbacks: {
    // AuthJs 고유 토큰
    async jwt({ token, account, user }) {
      if (account && account["id_token"]) {
        token["idToken"] = account["id_token"];
      }
      if (user?.id) {
        token["id"] = user.id;
      }
      return token;
    },
    // AuthJs 고유 세션
    async session({ session, token }) {
      if (!token["idToken"] || !token["id"]) throw new NextError({ code: "UNAUTHORIZED" });

      session.user["id"] = token["id"];
      session.user["idToken"] = token["idToken"];
      return session;
    },
    // AuthJs 고유 키 가지기 전 signIn
    // user.id => keycloak session id
    async signIn({ profile, user }) {
      if (!profile?.sub || !profile?.email || !profile?.nickname)
        throw new NextError({ code: "UNAUTHORIZED" });

      let dbUser = await prisma.appUser.findFirst({
        where: {
          sub: profile.sub,
        },
      });

      if (dbUser) {
        dbUser = await prisma.appUser.update({
          where: { id: dbUser.id },
          data: {
            ...withUpdate(dbUser.id),
          },
        });
      }
      else {
        const id = uuid();
        dbUser = await prisma.appUser.create({
          data: {
            id: id,
            sub: profile.sub,
            ...withCreate(id),
          },
        });
      }
      user["id"] = dbUser.id;

      return true;
    },
  },
});
