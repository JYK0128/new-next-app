import { createTRPCClient, createWSClient, httpBatchLink, httpBatchStreamLink, httpLink, httpSubscriptionLink, isNonJsonSerializable, loggerLink, splitLink } from "@trpc/client";
import { defaultTransformer } from "@trpc/server/unstable-core-do-not-import";
import { createTRPCContext } from "@trpc/tanstack-react-query";
import { EventSourcePolyfill } from "event-source-polyfill";
import SuperJSON from "superjson";

import type { AppRouter } from "@/trpc/routers/_app";

export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>();

/* trpc 환경 */
const isServer = typeof window === "undefined";
const baseURL = isServer ? "" : window.location.origin;

/* trpc 인증 */
export let token: string | undefined;
export function setToken(newToken?: string) {
  token = newToken;
}

/* trpc 소켓 클라이언트 */
const socketClient = createWSClient({
  url: `${baseURL}/ws`,
  connectionParams: () => ({
    Authorization: token && `Bearer ${token}`,
  }),
  lazy: {
    enabled: true,
    closeMs: 0,
  },
});

/* trpc SSR 지원(1) - creator helper */
const getTrpcClientInner = () => createTRPCClient<AppRouter>({
  links: [
    loggerLink({
      enabled: (opts) =>
        (process.env.NODE_ENV === "development" && !isServer)
        || (opts.direction === "down" && opts.result instanceof Error),
    }),
    splitLink({
      condition: (op) => op.type === "subscription",
      /* WS 통신 */
      // true: wsLink({
      //   client: socketClient,
      //   transformer: SuperJSON,
      // }),
      /* SSE 통신 */
      true: httpSubscriptionLink({
        url: `${baseURL}/trpc`,
        transformer: SuperJSON,
        EventSource: EventSourcePolyfill,
        eventSourceOptions: async () => {
          return {
            headers: {
              Authorization: (token && `Bearer ${token}`) as string,
            },
          };
        },
      }),
      false: splitLink({
        condition: (op) => op.context.stream,
        true: httpBatchStreamLink({
          url: `${baseURL}/trpc`,
          headers: () => ({
            Authorization: token && `Bearer ${token}`,
          }),
          transformer: SuperJSON,
        }),
        false: splitLink({
          condition: (op) => isNonJsonSerializable(op.input),
          true: httpLink({
            url: `${baseURL}/trpc`,
            headers: () => ({
              Authorization: token && `Bearer ${token}`,
            }),
            transformer: defaultTransformer,
          }),
          false: httpBatchLink({
            url: `${baseURL}/trpc`,
            headers: () => ({
              Authorization: token && `Bearer ${token}`,
            }),
            transformer: SuperJSON,
          }),
        }),
      }),
    }),
  ],
});

/* trpc SSR 지원(2) - get client */
let browserTRPCClient: ReturnType<typeof getTrpcClientInner> | undefined = undefined;
export function getTrpcClient() {
  if (isServer) {
    return getTrpcClientInner();
  }
  if (!browserTRPCClient) browserTRPCClient = getTrpcClientInner();
  return browserTRPCClient;
}
