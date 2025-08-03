import LeftNavbar from "../components/Navbar/LeftNavbar";
import RightNavbar from "../components/Navbar/RightNavbar";

const Home = () => {
  return (
    <div>
      <main className="w-10/12 mx-auto grid lg:grid-cols-12 gap-3">
        {/* Left Navbar */}
        <aside className="col-span-3">
          <LeftNavbar />
        </aside>

        {/* Main Content */}
        <section className="col-span-6">Main Content</section>

        {/* Right Navbar */}
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default Home;
