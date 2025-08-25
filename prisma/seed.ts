import { type Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.AppUserCreateInput[] = [];

export async function main() {
  console.log("🌱 Seeding database...");

  // eslint-disable-next-line sonarjs/no-empty-collection
  for (const u of userData) {
    await prisma.appUser.create({ data: u });
  }

  console.log("✅ Seeding completed.");
}

main();
