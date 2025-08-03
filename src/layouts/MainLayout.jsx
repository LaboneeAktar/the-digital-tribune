import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Header />

        <section className="w-full lg:w-10/12 mx-auto">
          <LatestNews />
          <Navbar />
        </section>
      </div>

      <Outlet />
    </div>
  );
};

export default MainLayout;
