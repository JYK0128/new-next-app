import SchemaBuilder from "@pothos/core";
import PothosPrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { Prisma, type PrismaClient } from "@prisma/client";
import type { UUID } from "crypto";
import { BigIntResolver, DateResolver, JSONObjectResolver, UUIDResolver } from "graphql-scalars";

import prisma from "@/lib/prisma";

type ScalarType<Input, OutPut = Input> = {
  Input: Input | string
  Output: OutPut
};

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes
  Context: {
    prisma: PrismaClient
  }
  Scalars: {
    JSON: ScalarType<Record<string, unknown>>
    Date: ScalarType<Date>
    BigInt: ScalarType<bigint>
    UUID: ScalarType<UUID>
  }
}>({
  plugins: [PothosPrismaPlugin],
  prisma: {
    client: prisma,
    dmmf: Prisma.dmmf,
  },
});

builder.addScalarType("JSON", JSONObjectResolver);
builder.addScalarType("Date", DateResolver);
builder.addScalarType("BigInt", BigIntResolver);
builder.addScalarType("UUID", UUIDResolver);
