import { gql } from "@apollo/client";

const GET_USERS = gql`
  query getUsers {
    users {
      id
      firstname
    }
  }
`;

export { GET_USERS };
