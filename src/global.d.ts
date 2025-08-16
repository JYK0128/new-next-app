import type { DefaultSession } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";

import type messages from "@/i18n/messages/en.json";
import type { formats } from "@/i18n/request";
import type { routing } from "@/i18n/routing";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly DATABASE_URL: string
      readonly NEXT_PUBLIC_ENV: string
      readonly NEXT_SITE_DOMAIN: string

      readonly AUTH_KEYCLOAK_ID: string
      readonly AUTH_KEYCLOAK_SECRET: string
      readonly AUTH_KEYCLOAK_ISSUER: string
    }
  }
}

declare module "react" {
  function forwardRef<T, P = object>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

declare module "next-auth" {
  interface User {
    idToken?: string
  }

  interface Session {
    user: User & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    idToken?: string
  }
}

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    Messages: typeof messages
    Formats: typeof formats
  }
}

declare module "@trpc/client" {
  interface OperationContext {
    stream: boolean
  }
}

// React Hook Form 추가 타입
declare module "react-hook-form" {
  type FieldPathValue<TFieldValues extends FieldValues, TName extends keyof TFieldValues>
   = TFieldValues[TName] extends (infer U)[]
     ? U
     : TFieldValues[TName];
}
