import { Link, NavLink, useLocation } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  const links = (
    <>
      <li>
        <NavLink to="/">
          {({ isActive }) => (
            <span className={isActive ? "text-reddish" : "text-gray-700"}>
              Home
            </span>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink to="/about">
          {({ isActive }) => (
            <span className={isActive ? "text-reddish" : "text-gray-700"}>
              About
            </span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/career">
          {({ isActive }) => (
            <span className={isActive ? "text-reddish" : "text-gray-700"}>
              Career
            </span>
          )}
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mt-5">
      <div className="navbar shadow-sm lg:px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="text-lg menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <h3 className="text-md lg:text-2xl font-bold italic text-gray-700 text-nowrap">
              The Digital Tribune
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{links}</ul>
        </div>
        <div className="navbar-end">
          <BsPersonCircle className="h-7 w-7 mr-2" />

          {!isLoginPage && !isRegisterPage && (
            <Link
              to="/login"
              className="relative inline-flex items-center justify-start px-2 lg:px-7 py-1 overflow-hidden font-medium transition-all bg-gray-700 rounded  group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-reddish absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out ">
                Login
              </span>
            </Link>
          )}
          {isLoginPage && (
            <Link
              to="/register"
              className="relative inline-flex items-center justify-start px-2 lg:px-7 py-1 overflow-hidden font-medium transition-all bg-gray-700 rounded  group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-reddish absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out ">
                Register Now
              </span>
            </Link>
          )}

          {isRegisterPage && (
            <Link
              to="/login"
              className="relative inline-flex items-center justify-start px-2 lg:px-7 py-1 overflow-hidden font-medium transition-all bg-gray-700 rounded  group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-reddish absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out ">
                Login
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
