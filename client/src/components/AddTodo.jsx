import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/userQueries";
import { GET_TODOS } from "../queries/todoQueries";
import { ADD_TODO } from "../mutations/todoMutations";

export const AddTodo = () => {
  const [user_id, setId] = useState("");
  const [task, setTask] = useState("");
  const [done, setDone] = useState(false);

  const [addTodo] = useMutation(ADD_TODO, {
    variables: { user_id, task, done },
    update(cache, { data: { addTodo } }) {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: todos.concat([addTodo]) },
      });
    },
  });

  // GET users for the select
  const { loading, error, data } = useQuery(GET_USERS);

  const onSubmit = (e) => {
    e.preventDefault();
    if (task === "" || user_id === "") {
      return alert("Please complete all fields.");
    }

    //console.log(`${user_id} ${task} ${done}`);
    addTodo(user_id, task, done);

    setTask("");
    setId("");
    setDone(false);
  };

  return (
    <div className="rounded">
      <h2 className="text-[21px] font-bold mt-4">NUOVA ATTIVITÀ</h2>
      {!loading && !error && (
        <form className="bg-gray-400" onSubmit={onSubmit}>
          <div className="flex w-full justify-evenly">
            <input
              className="w-full rounded p-4 my-4 ml-4 mr-1"
              type="text"
              id="task"
              value={task}
              placeholder="Lorem ipsum"
              onChange={(e) => setTask(e.target.value)}
            />
            <select
              className="w-full rounded p-4 my-4 mr-4 ml-1"
              value={user_id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            >
              <option disabled={true} value="">
                Operatore
              </option>
              {data.users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.firstname}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <button className="bg-gray-700 text-white-100 px-12 py-2 m-4 rounded">
              Annulla
            </button>
            <button
              type="submit"
              className="bg-cyan text-white-100 px-12 py-2 m-4 rounded"
            >
              Salva
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
