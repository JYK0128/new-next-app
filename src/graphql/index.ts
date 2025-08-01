import { mergeTypeDefs } from "@graphql-tools/merge";
import { mergeResolvers } from "@graphql-tools/merge";

import { helloResolvers } from "@/graphql/schema/hello/hello.resolvers";
import { helloTypeDefs } from "@/graphql/schema/hello/hello.typeDefs";
import { worldResolvers } from "@/graphql/schema/world/world.resolvers";
import { worldTypeDefs } from "@/graphql/schema/world/world.typeDefs";

export const typeDefs = mergeTypeDefs([helloTypeDefs, worldTypeDefs]);
export const resolvers = mergeResolvers([helloResolvers, worldResolvers]);
