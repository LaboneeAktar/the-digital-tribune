import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const AuthLayout = () => {
  return (
    <div className="w-10/12 mx-auto bg-[#F3F3F3]">
      <header>
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
