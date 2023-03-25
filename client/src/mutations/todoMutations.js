import { gql } from "@apollo/client";

const ADD_TODO = gql`
  mutation addTodo($user_id: ID!, $task: String!, $done: Boolean!) {
    addTodo(user_id: $user_id, task: $task, done: $done) {
      id
      task
      done
    }
  }
`;

const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $task: String!, $done: Boolean!) {
    updateTodo(id: $id, task: $task, done: $done) {
      id
      task
      done
    }
  }
`;

export { ADD_TODO, UPDATE_TODO };
