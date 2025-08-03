"use client";
import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/lib/trpc";

export function TrpcComponent() {
  const trpc = useTRPC();
  const { data = [] } = useQuery(trpc.post.getAll.queryOptions({}));

  return (
    <div>
      <div>tRPC 테스트</div>
      <div>
        {data.map((v) => (
          <div key={v.id}>
            {v.id}
          </div>
        ))}
      </div>
    </div>
  );
}
