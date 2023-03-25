import { gql } from "@apollo/client";

const ADD_USER = gql`
  mutation addUser($firstname: String!) {
    addUser(firstname: $firstname) {
      id
      firstname
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      firstname
    }
  }
`;

export { ADD_USER, DELETE_USER };
