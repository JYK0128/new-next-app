import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { genericOAuth, keycloak } from "better-auth/plugins";

import prisma from "@/lib/prisma";

export const auth = betterAuth({
  user: {
    modelName: "AppUser",
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [
    genericOAuth({
      config: [
        keycloak({
          clientId: process.env.AUTH_KEYCLOAK_ID,
          clientSecret: process.env.AUTH_KEYCLOAK_SECRET,
          issuer: process.env.AUTH_KEYCLOAK_ISSUER,
        }),
      ],
    }),
    // last plugin in the array
    nextCookies(),
  ],
});
