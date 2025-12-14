import { isServer, QueryClient, type QueryClientConfig } from "@tanstack/react-query";

let browserQueryClient: QueryClient | undefined = undefined;
export function getQueryClient(config?: QueryClientConfig) {
  if (isServer) {
    return new QueryClient(config);
  }
  else {
    if (!browserQueryClient) browserQueryClient = new QueryClient(config);
    return browserQueryClient;
  }
}
