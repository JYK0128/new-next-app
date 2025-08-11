import { NextResponse } from "next/server";

import { signIn } from "@/auth";

export async function GET() {
  const res = await signIn("keycloak", {
    redirect: false,
    redirectTo: process.env.NEXT_SITE_DOMAIN,
  });

  return NextResponse.redirect(res);
}
