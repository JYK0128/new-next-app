export * from "@/.generated/gql";
export * from "@/.generated/gql/graphql";
import { GraphQLClient } from "graphql-request";


export const client = new GraphQLClient("http://localhost:3000/graphql");

export const request = client.request.bind(client);
