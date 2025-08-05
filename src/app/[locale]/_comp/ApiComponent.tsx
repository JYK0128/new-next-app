"use client";
import { AppUser } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";


export function ApiComponent() {
  const { data } = useQuery<AppUser[]>({
    queryKey: ["users", "api"],
    queryFn: async () => {
      return (await fetch("/api/user/getUsers")).json();
    },
  });

  return (
    <div>
      <div>api 테스트</div>
      <div>
        {data?.map((user) => (
          <div key={user?.id}>
            <div>{user?.email}</div>
            <div>{user?.nickname}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
