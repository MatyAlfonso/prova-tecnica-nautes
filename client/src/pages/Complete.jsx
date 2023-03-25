import { Todos, NavBar, TopBar, Pagination } from "../components";

export const Complete = () => {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex flex-col w-full bg-gray-100">
        <TopBar />
        <Todos />
        <Pagination />
      </div>
    </div>
  );
};
