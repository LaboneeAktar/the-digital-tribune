import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/Navbar/RightNavbar";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];

  const { title, image_url, details } = news;

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-10/12 mx-auto grid lg:grid-cols-12 gap-8 my-10">
        <section className="col-span-9">
          <Link to="/" className="font-semibold text-gray-700 pb-5">
            Digital Tribune
          </Link>

          <div className="card bg-base-100 shadow-lg">
            <figure className="p-5">
              <img src={image_url} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
              <p className="pb-5 text-justify">{details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="btn bg-reddish text-white"
                >
                  <FaArrowLeft /> All news in this category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <RightNavbar />
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
