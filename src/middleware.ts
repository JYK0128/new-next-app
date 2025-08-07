import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { auth } from "@/auth";
import { routing } from "@/i18n/routing";

export default auth(async (req: NextRequest) => {
  return createMiddleware(routing)(req);
});

export const config = {
  matcher: [
    "/((?!api|trpc|graphql|_next|_vercel|.*\\..*).*)",
  ],
};
