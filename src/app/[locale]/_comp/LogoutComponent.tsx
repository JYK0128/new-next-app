"use client";
import { signOut } from "next-auth/react";
import { useTransition } from "react";


export function LogoutComponent() {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await signOut();
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
