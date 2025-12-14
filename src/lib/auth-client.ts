import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

export const authClient = createAuthClient();
export const { useSession, signOut } = authClient;
export const signIn = () => authClient.signIn.social({ provider: "keycloak" });
