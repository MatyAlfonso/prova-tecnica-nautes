import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as Toolbox } from "../assets/toolbox.svg";
import { ReactComponent as Clipboard } from "../assets/clipboard.svg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-gray-700">
      <Logo />
      {window.location.pathname === "/" ? (
        <>
          <Link to="/">
            <div
              className={`flex justify-start items-center my-8 p-8 border-red-200 border-l-8 bg-black bg-opacity-20"}`}
            >
              <Toolbox />
              <p className="text-white-100 ml-8">Attività da completare</p>
            </div>
          </Link>
          <Link to="/completate">
            <div
              className={`flex justify-start items-center p-8 
          }`}
            >
              <Clipboard />
              <p className="text-white-100 ml-8">Attività completate</p>
            </div>
          </Link>
        </>
      ) : (
        <>
          <Link to="/">
            <div
              className={`flex justify-start items-center p-8 
          }`}
            >
              <Toolbox />
              <p className="text-white-100 ml-8">Attività da completare</p>
            </div>
          </Link>
          <Link to="/completate">
            <div
              className={`flex justify-start items-center my-8 p-8 border-red-200 border-l-8 bg-black bg-opacity-20"}`}
            >
              <Clipboard />
              <p className="text-white-100 ml-8">Attività completate</p>
            </div>
          </Link>
        </>
      )}
    </nav>
  );
};
