import { Link, NavLink, useLocation } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthContext";

const Navbar = () => {
  const [showDetails, setShowDetails] = useState(false);

  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);

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
          {/* Profile */}

          <div className="flex justify-end p-2">
            {!user ? (
              <BsPersonCircle className="text-4xl text-gray-500" />
            ) : (
              <div className="relative">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300"
                  onClick={() => setShowDetails(!showDetails)}
                />

                {/* Profile details dropdown */}
                {showDetails && (
                  <div className="absolute -right-32 mt-2 w-64 bg-white rounded-md shadow-lg p-4 z-50 border border-gray-200">
                    <div className="flex items-center space-x-2 mb-3 pt-4">
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-12 h-12 rounded-full border"
                      />
                      <div>
                        <h3 className="font-semibold">{user.displayName}</h3>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex justify-between gap-2 mt-10">
                      <button
                        onClick={() => setShowDetails(false)}
                        className="btn btn-sm w-1/2 bg-gray-300 hover:bg-reddish hover:text-white"
                      >
                        Close
                      </button>
                      <button
                        onClick={logOut}
                        className="btn btn-sm w-1/2 bg-gray-300 hover:bg-reddish hover:text-white"
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {!isLoginPage && !isRegisterPage && !user && (
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
          {isLoginPage && !user && (
            <Link
              to="/register"
              className="relative inline-flex items-center justify-start px-2 lg:px-7 py-2 overflow-hidden font-medium transition-all bg-gray-700 rounded  group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-reddish absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out ">
                Register Now
              </span>
            </Link>
          )}

          {isRegisterPage && !user && (
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
