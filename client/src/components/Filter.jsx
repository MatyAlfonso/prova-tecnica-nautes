import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/userQueries";

export const Filter = () => {
  const [user_id, setId] = useState("");
  const { loading, error, data } = useQuery(GET_USERS);

  return (
    <>
      <h2 className='font-semibold text-gray-700 m-4 text-[21px]'>Attività da completare</h2>
      {!loading && !error && (
        <div className=''>
          <select
          className='rounded p-4 my-4 w-full'
            value={user_id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          >
            <option disabled={true} value="">
              Filtra per operatore
            </option>
            {data.users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.firstname}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};
