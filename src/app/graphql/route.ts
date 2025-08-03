import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import type { NextRequest } from "next/server";

import { gqlSchema } from "@/graphql";
import prisma from "@/lib/prisma";

const server = new ApolloServer({
  schema: gqlSchema,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req, prisma }),
});

export { handler as GET, handler as POST };
