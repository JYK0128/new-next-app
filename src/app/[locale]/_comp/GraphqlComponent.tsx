"use client";
import { useQuery } from "@tanstack/react-query";

import { type GetUserQuery, graphql, type HelloQuery, request } from "@/lib/gql";


const hello = graphql(/* GraphQL */ `
  query Hello {
    hello
  }
`);

const getUser = graphql(/* GraphQL */ `
  query GetUser($id: UUID!) {
    user(input: { id: $id }) {
      id
      email
      nickname
    }
  }
`);


export function GraphqlComponent() {
  const userId = "bd6661a6-4ddb-4686-87a2-c5853205054d";

  useQuery<HelloQuery>({
    queryKey: ["hello"],
    queryFn: async () => request(hello),
  });

  const { data } = useQuery<GetUserQuery>({
    queryKey: ["user", userId],
    queryFn: async () => request(getUser, {
      id: userId,
    }),
  });

  return (
    <div>
      <div>GQL 테스트</div>
      <div>
        {data?.user?.id}
        {data?.user?.email}
      </div>
    </div>
  );
}
