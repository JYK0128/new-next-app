import { builder } from "@/graphql/builder";

const UserInput = builder.inputType("UserInput", {
  fields: (t) => ({
    id: t.field({ type: "UUID", required: true }),
  }),
});

const UserOutput = builder.prismaObject("AppUser", {
  name: "UserOutput",
  fields: (t) => ({
    id: t.exposeID("id"),
    nickname: t.exposeString("nickname"),
    email: t.exposeString("email"),
  }),
});

builder.queryType({
  fields: (t) => ({
    user: t.field({
      type: UserOutput,
      args: { input: t.arg({ type: UserInput, required: true }) },
      resolve: (_, { input }, { prisma }) =>
        prisma.appUser.findFirstOrThrow({
          where: input,
        }),
    }),
  }),
});
