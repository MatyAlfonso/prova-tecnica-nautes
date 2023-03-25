import { AddTodo, TodoRow, Spinner, Filter } from "./index";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../queries/todoQueries";

export const Todos = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong... try later.</p>;

  return (
    <div className="flex flex-col mx-auto">
      <Filter />
      {!loading && !error && data.todos.length > 0 ? (
        <table className="table-fixed rounded">
          <thead className="bg-red-100 rounded text-white-100 h-[55px]">
            <tr>
              <th className="font-medium text-left p-4">Attività</th>
              <th className="font-medium text-left p-4">Operatore</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.todos.map((todo, index) => (
              <TodoRow key={index} todo={todo} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>There aren't to do's. Write something!</p>
      )}
      <AddTodo />
    </div>
  );
};
