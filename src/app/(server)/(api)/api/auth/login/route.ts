import { NextResponse } from "next/server";

import { signIn } from "@/auth";

export async function GET() {
  console.log("=====NEXT_SITE_DOMAIN=====", process.env.NEXT_SITE_DOMAIN);
  console.log("=====AUTH_TRUST_HOST=====", process.env.AUTH_TRUST_HOST);
  console.log("=====AUTH_URL=====", process.env.AUTH_URL);

  const res = await signIn("keycloak", {
    redirect: false,
    redirectTo: process.env.NEXT_SITE_DOMAIN,
  });

  return NextResponse.redirect(res);
}
