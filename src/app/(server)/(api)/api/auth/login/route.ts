import { NextResponse } from "next/server";

import { auth } from "@/auth";

export async function GET() {
  const res = await auth.api.signInWithOAuth2({ body: { providerId: "keycloak" } });

  return NextResponse.redirect(res.url);
}
