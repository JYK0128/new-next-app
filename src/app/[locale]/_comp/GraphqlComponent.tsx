"use client";
import { useQuery } from "@tanstack/react-query";

import { graphql, request } from "@/lib/gql";


const getUsers = graphql(/* GraphQL */ `
  query GetUsers {
    users {
      id
      email
      nickname
    }
  }
`);

export function GraphqlComponent() {
  const { data } = useQuery({
    queryKey: ["users", "gql"],
    queryFn: async () => {
      return request(getUsers);
    },
  });

  return (
    <div>
      <div>GQL 테스트</div>
      <div>
        {data?.users?.map((user) => (
          <div key={user.id}>
            <div>{user.email}</div>
            <div>{user.nickname}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
