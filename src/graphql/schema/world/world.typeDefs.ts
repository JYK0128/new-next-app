import gql from "graphql-tag";

export const worldTypeDefs = gql`
  type Query {
    world: String
  }
`;
