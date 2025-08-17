import { decodeJwt } from "jose";
import NextAuth from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

import { NextError } from "@/lib/error";
import prisma, { uuid, withCreate, withUpdate } from "@/lib/prisma";

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
      const user = await prisma.appUser.findFirst({
        where: {
          sub: profile.sub,
        },
      });

      if (user) {
        await prisma.appUser.update({
          where: { id: user.id },
          data: {
            ...withUpdate(user.id),
          },
        });
      }
      else {
        const id = uuid();
        await prisma.appUser.create({
          data: {
            id: id,
            sub: profile.sub,
            ...withCreate(id),
          },
        });
      }


      return true;
    },
  },
});
