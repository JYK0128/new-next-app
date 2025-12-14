import { type NextRequest, NextResponse } from "next/server";

import { auth } from "@/auth";
import { NextError } from "@/lib/error";

export async function GET({ headers }: NextRequest) {
  try {
    const { idToken } = await auth.api.getAccessToken({
      headers,
      body: { providerId: "keycloak" },
    });

    if (!idToken) {
      throw new NextError({ code: "UNAUTHORIZED" });
    }

    await auth.api.signOut({ headers });

    const signoutURL = new URL(`${process.env.AUTH_KEYCLOAK_ISSUER}/protocol/openid-connect/logout`);
    signoutURL.searchParams.set("id_token_hint", idToken);
    signoutURL.searchParams.set("post_logout_redirect_uri", process.env.NEXT_SITE_URL);

    return NextResponse.redirect(signoutURL);
  }
  catch {
    return NextResponse.redirect(new URL("/", process.env.NEXT_SITE_URL));
  }
}
