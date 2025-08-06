import { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthContext";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/01")
      .then((res) => res.json())
      .then((data) => setNews(data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-gray-200 mt-7 mx-auto rounded-sm">
      <div className="flex gap-2 items-center justify-center p-3">
        <p className="py-2 px-6 bg-[#D72050] text-white rounded-sm">Latest</p>
        <Marquee className="" pauseOnHover={true}>
          {news.map((singleNews) => (
            <div key={singleNews._id}>
              {" "}
              {user ? (
                <Link to={`/news/${singleNews._id}`} className="mr-10">
                  {singleNews.title}
                </Link>
              ) : (
                <Link to="/login" className="mr-10">
                  {singleNews.title}
                </Link>
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
