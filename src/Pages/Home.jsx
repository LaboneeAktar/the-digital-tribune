import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="w-11/12 mx-auto">
        <LatestNews />
      </section>
    </div>
  );
};

export default Home;
