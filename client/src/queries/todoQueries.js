import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query getTodos {
    todos {
      id
      task
      user {
        id
        firstname
      }
      done
    }
  }
`;

const GET_TODO = gql`
  query getTodo($id: ID!) {
    todo(id: $id) {
      task
      done
    }
  }
`;

export { GET_TODOS, GET_TODO };
