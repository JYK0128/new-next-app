import { builder } from "@/graphql/builder";


const UserInput = builder.inputType("UserInput", {
  fields: (t) => ({
    id: t.field({ type: "UUID", required: true }),
  }),
});

const ChannelOutput = builder.prismaObject("Channel", {
  name: "ChannelOutput",
  fields: (t) => ({
    id: t.field({ type: "ID", resolve: ({ id }) => id.toString() }),
    name: t.exposeString("name"),
    description: t.exposeString("description"),
  }),
});

const UserOutput = builder.prismaObject("AppUser", {
  name: "UserOutput",
  fields: (t) => ({
    id: t.exposeID("id"),
    nickname: t.exposeString("nickname"),
    email: t.exposeString("email"),
    channels: t.loadableList({
      type: ChannelOutput,
      resolve: ({ id }) => id,
      load: async (userIds: string[], { prisma }) => {
        const channelParticipants = await prisma.channelParticipant.findMany({
          where: {
            userId: {
              in: userIds,
            },
          },
          include: {
            channel: true,
          },
        });

        return userIds.map((userId) =>
          channelParticipants
            .filter((participant) => participant.userId === userId)
            .map((participant) => participant.channel),
        );
      },
    }),
  }),
});


builder.queryType({
  fields: (t) => ({
    user: t.field({
      type: UserOutput,
      args: { input: t.arg({ type: UserInput, required: true }) },
      resolve: (_, { input }, { prisma }) => {
        return prisma.appUser.findFirstOrThrow({
          where: input,
        });
      },
    }),
    users: t.field({
      type: [UserOutput],
      resolve: (_1, _2, { prisma }) => {
        return prisma.appUser.findMany();
      },
    }),
  }),
});
