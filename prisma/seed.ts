import { Prisma, PrismaClient } from "@/prisma";

const prisma = new PrismaClient();

const userData: Prisma.app_userCreateInput[] = [];

export async function main() {
  console.log("🌱 Seeding database...");

  // eslint-disable-next-line sonarjs/no-empty-collection
  for (const u of userData) {
    await prisma.app_user.create({ data: u });
  }

  console.log("✅ Seeding completed.");
}

main();
