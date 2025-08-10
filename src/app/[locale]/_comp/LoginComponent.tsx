"use client";
import { signIn } from "next-auth/react";
import { useTransition } from "react";

export function LoginComponent() {
  const [isPending, startTransition] = useTransition();

  const handleLogin = () => {
    startTransition(async () => {
      await signIn("keycloak");
    });
  };

  return (
    <div>
      <button onClick={handleLogin} disabled={isPending}>
        {isPending ? "Signing..." : "SignIn with Keycloak"}
      </button>
    </div>
  );
}
