"use client";
import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/lib/trpc";

export function TrpcComponent() {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.user.getAll.queryOptions({}));

  return (
    <div>
      <div>tRPC 테스트</div>
      <div>
        {data?.map((user) => (
          <div key={user.id}>
            <div>{user.email}</div>
            <div>{user.nickname}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
