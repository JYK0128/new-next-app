"use client";

import { defaultShouldDehydrateQuery, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import type { PropsWithChildren } from "react";
import SuperJSON from "superjson";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { getQueryClient } from "@/lib/query";
import { getTrpcClient, TRPCProvider } from "@/lib/trpc";

export function Providers({ children }: PropsWithChildren) {
  const trpcClient = getTrpcClient();
  const queryClient = getQueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
      dehydrate: {
        serializeData: SuperJSON.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query)
          || query.state.status === "pending",
      },
      hydrate: {
        deserializeData: SuperJSON.deserialize,
      },
    },
  });

  return (
    <ErrorBoundary>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
            {children}
          </TRPCProvider>
        </QueryClientProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}
