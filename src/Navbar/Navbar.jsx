import { Link } from "react-router-dom";
import { navbar } from "../Shared/Constant";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start w-auto">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar.map((ele, i) => (
                <li key={i}>
                  <Link to={ele.route}>{ele.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navbar.map((ele, i) => (
              <li key={i}>
                <Link to={ele.route}>{ele.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
