import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="w-10/12 mx-auto">
        <LatestNews />
        <Navbar />
      </section>
    </div>
  );
};

export default Home;
