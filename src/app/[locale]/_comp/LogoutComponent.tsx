"use client";
import { signOut } from "next-auth/react";
import { useTransition } from "react";


export function LogoutComponent() {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      const res = await signOut({
        redirect: false,
        callbackUrl: "http://localhost:3000",
      });

      if (res?.url) {
        window.location.href = res.url;
      }
    });
  };

  return (
    <div>
      <button onClick={handleLogout} disabled={isPending}>
        {isPending ? "Signing out..." : "SignOut with Keycloak"}
      </button>
    </div>
  );
}
