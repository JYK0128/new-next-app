import { type Prisma, PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient
  __prisma_logger_attached__: boolean
};

const prisma
  = globalForPrisma.prisma
    ?? new PrismaClient({
      log: ["query", "error", "info", "warn"],
    });

if (
  process.env.NODE_ENV === "development"
  && !globalForPrisma.__prisma_logger_attached__
) {
  prisma.$on("query" as never, (e: Prisma.QueryEvent) => {
    console.log("Query: " + e.query);
    console.log("Params: " + e.params);
    console.log("Duration: " + e.duration + "ms");
  });
  globalForPrisma.__prisma_logger_attached__ = true;
}


if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;

export const withCreate = (id?: string) => ({
  createdBy: id!,
  createdAt: new Date(),
  updatedBy: id!,
  updatedAt: new Date(),
});

export const withUpdate = (id?: string) => ({
  updatedBy: id!,
  updatedAt: new Date(),
});

export const withDelete = (id?: string) => ({
  deletedBy: id!,
  deletedAt: new Date(),
});
