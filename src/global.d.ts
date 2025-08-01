import type messages from "@/i18n/messages/en.json";
import type { formats } from "@/i18n/request";
import type { routing } from "@/i18n/routing";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly DATABASE_URL: string
    }
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
