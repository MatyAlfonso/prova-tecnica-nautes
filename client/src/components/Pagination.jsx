import { useState } from "react";

export const Pagination = () => {
  const [pagination, setPagination] = useState(["1", "2", "3", "4", "5", "6"]);

  return (
    <div className="flex items-center justify-between m-10 ">
      <div className="flex">
        <p className="m-2">Visualizza elementi</p>
        <select className="bg-opacity-0">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option selected>8</option>
        </select>
      </div>
      <div className="flex flex-row justify-center items-center">
        <p className="p-2">Mostra da 1 a 4 di 4 elementi</p>
        <button className="border border-gray-300 p-2 rounded">
          Precedente
        </button>
        {pagination.map((page) => (
          <button className={`border border-gray-300 py-2 px-4 rounded`}>
            {page}
          </button>
        ))}
        <button className="border border-gray-300 p-2 rounded">Succ</button>
      </div>
    </div>
  );
};
