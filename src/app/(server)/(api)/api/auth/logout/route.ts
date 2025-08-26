import { NextResponse } from "next/server";

import { auth } from "@/auth";

export async function GET() {
  const session = await auth();

  if (!session?.user?.idToken) {
    return NextResponse.redirect(process.env.NEXT_SITE_URL);
  }

  const signoutURL = new URL(`${process.env.AUTH_KEYCLOAK_ISSUER}/protocol/openid-connect/logout`);
  signoutURL.searchParams.set("id_token_hint", session.user?.idToken);
  signoutURL.searchParams.set("post_logout_redirect_uri", process.env.NEXT_SITE_URL);

  const response = NextResponse.redirect(signoutURL);
  response.cookies.delete("authjs.session-token");
  response.cookies.delete({
    name: "__Secure-authjs.session-token",
    path: "/",
    domain: new URL(process.env.NEXT_SITE_URL).hostname
    secure: true,
  });

  return response;
}
