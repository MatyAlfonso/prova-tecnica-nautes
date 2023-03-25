import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as Toolbox } from "../assets/toolbox.svg";
import { ReactComponent as Clipboard } from "../assets/clipboard.svg";

export const NavBar = () => {
  return (
    <nav className="bg-gray-700">
      <Logo />
      <div
        className={`flex justify-start items-center my-8 p-8 ${
          window.location.pathname === "/"
            ? "border-red-200 border-l-8 bg-black bg-opacity-20"
            : ""
        }`}
      >
        <Toolbox />
        <p className="text-white-100 ml-8">Attività da completare</p>
      </div>
      <div
        className={`flex justify-start items-center p-8${
          window.location.pathname === "/completate"
            ? "border-red-200 border-l-8 bg-black bg-opacity-20"
            : ""
        }`}
      >
        <Clipboard />
        <p className="text-white-100 ml-8">Attività completate</p>
      </div>
    </nav>
  );
};
