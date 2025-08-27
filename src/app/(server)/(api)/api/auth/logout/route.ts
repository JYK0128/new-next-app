import { NextResponse } from "next/server";

import { auth, signOut } from "@/auth";

export async function GET() {
  const session = await auth();

  if (!session?.user?.idToken) {
    return NextResponse.redirect(process.env.NEXT_SITE_URL);
  }

  // auth 세션
  await signOut({
    redirect: false,
    redirectTo: process.env.NEXT_SITE_URL,
  });

  // keycloak 세션
  const signoutURL = new URL(`${process.env.AUTH_KEYCLOAK_ISSUER}/protocol/openid-connect/logout`);
  signoutURL.searchParams.set("id_token_hint", session.user?.idToken);
  signoutURL.searchParams.set("post_logout_redirect_uri", process.env.NEXT_SITE_URL);

  const response = NextResponse.redirect(signoutURL);

  return response;
}
