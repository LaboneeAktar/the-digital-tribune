import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/Navbar/RightNavbar";
import { FaArrowLeft, FaRegCalendarAlt } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];

  const { title, image_url, details } = news;

  //Editors Insight json
  const info = [
    {
      id: 1,
      title: "Top 10 Elegant Wedding Guest Dresses for Summer 2024",
      date: "Feb 12, 2024",
      img: "https://i.ibb.co.com/hFKf8fhW/beautiful-turkish-girl-long-red-dress-walks-summer-old-city.jpg",
    },
    {
      id: 2,
      title: "How to Style Accessories with Your Wedding Guest Outfit",
      date: "Mar 5, 2024",
      img: "https://i.ibb.co.com/svvFx50B/beautiful-arrangement-shoes-sand-bridal-accessories.jpg",
    },
    {
      id: 3,
      title: "Spring Trends: Floral Wedding Guest Dresses You’ll Love",
      date: "Apr 18, 2024",

      img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60",
    },
  ];

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

          <div className="mt-8">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Editors Insight
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {info.map((item) => (
                  <div
                    key={item.id}
                    className="bg-base-200 rounded-lg overflow-hidden shadow"
                  >
                    <div className="">
                      <img className="object-fit" src={item.img} alt="" />
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <div className="flex items-center text-gray-500 text-xs mt-2">
                        <FaRegCalendarAlt className="mr-1" />
                        {item.date}
                      </div>
                    </div>
                  </div>
                ))}
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
