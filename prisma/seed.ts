import { type Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [];

export async function main() {
  console.log("🌱 Seeding database...");

  // eslint-disable-next-line sonarjs/no-empty-collection
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }

  console.log("✅ Seeding completed.");
}

main();
