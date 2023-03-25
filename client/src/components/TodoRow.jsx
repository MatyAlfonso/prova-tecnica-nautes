import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_TODO } from "../mutations/todoMutations";
import { GET_TODO } from "../queries/todoQueries";

export const TodoRow = ({ todo }) => {
  const [done, setDone] = useState(todo.done);

  const [updateTodo] = useMutation(UPDATE_TODO, {
    variables: { id: todo.id, task: todo.task, done },
    refetchQueries: [{ query: GET_TODO, variables: { id: todo.id } }],
  });

  const onClick = () => {
    updateTodo(done);
    setDone(!done);
  };

  return (
    <tr className="rounded even:bg-gray-100 odd:bg-white-100">
      <td className='p-4 font-medium text-[15px]'>{todo.task}</td>
      <td className='p-4 font-medium text-[15px]'>{todo.user.firstname}</td>
      <td className='p-4'>
        <button className="bg-gray-700 py-2 px-10 text-white-200 rounded" onClick={onClick}>
          svolgi
        </button>
      </td>
    </tr>
  );
};
