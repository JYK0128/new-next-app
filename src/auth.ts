import { TRPCError } from "@trpc/server";
import { decodeJwt } from "jose";
import NextAuth from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

import prisma, { withCreate } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Keycloak],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.id_token) {
        token["id_token"] = account?.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (!token["id_token"]) throw new TRPCError({ code: "UNAUTHORIZED" });
      const payload = decodeJwt(token["id_token"]);
      if (!payload.sub) throw new TRPCError({ code: "UNAUTHORIZED" });

      session.user["id_token"] = token["id_token"];
      session.user.id = payload.sub;
      return session;
    },
    async signIn({ profile }) {
      if (!profile?.id || !profile?.email || !profile?.nickname) throw new TRPCError({ code: "UNAUTHORIZED" });
      await prisma.appUser.upsert({
        where: {
          id: profile.id,
        },
        create: {
          id: profile.id,
          email: profile.email,
          nickname: profile.nickname,
          lastLoginAt: new Date(),
          ...withCreate(profile.id),
        },
        update: {
          lastLoginAt: new Date(),
        },
      });

      return true;
    },
  },
});
