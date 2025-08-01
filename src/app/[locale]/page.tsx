import { getTranslations } from "next-intl/server";

import { Component } from "@/app/[locale]/Component";
import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.app_user.findMany();
  const t = await getTranslations();

  return (
    <div>
      <Component />
      <div>
        {t("welcome")}
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {user.id}
          </div>
        ))}
      </div>
    </div>
  );
}
