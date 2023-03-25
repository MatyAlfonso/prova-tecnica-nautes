import { Todos, NavBar, TopBar } from "../components";

export const Incomplete = () => {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex flex-col w-full bg-gray-100">
        <TopBar />
        <Todos />
      </div>
    </div>
  );
};
