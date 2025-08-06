import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category))
      .catch((error) => console.error(error));
  }, []);

  // Dummy Design
  const ads = [
    {
      id: 1,
      title: "Bangladesh wins fifth Test by six runs in thrilling Oval finale",
      category: "Cricket",
      date: "August 4, 2025",
      img: "https://i.ibb.co.com/G40YZnhK/5494.jpg",
    },
    {
      id: 2,
      title: "India's nightwatchman Deep stuns England with gritty fifty",
      category: "Sports",
      date: "August 2, 2025",
      img: "https://i.ibb.co.com/5hLPwc6Y/soccer-players-action-professional-stadium.jpg",
    },
    {
      id: 3,
      title: "Mohammed Siraj leads India to dramatic victory over England",
      category: "Cricket",
      date: "August 5, 2025",
      img: "https://i.ibb.co.com/CKB66dfz/5482.jpg",
    },
  ];

  return (
    <div>
      <h1 className="font-semibold text-center text-gray-700 pb-5">
        All Category
      </h1>
      <div className="flex flex-col gap-2 mx-auto">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            key={category.category_id}
          >
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? " btn text-reddish bg-gray-300 w-full"
                    : " btn text-gray-600 w-full hover:text-reddish"
                }
              >
                {category.category_name}
              </span>
            )}
          </NavLink>
        ))}
      </div>

      <div className="py-12">
        {ads.map((item) => (
          <div key={item.id} className="flex flex-col gap-3 mb-4 items-start">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-36 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <div className="flex items-center text-gray-500 text-xs mt-1">
                <span className="mr-3">{item.category}</span>
                <FaRegCalendarAlt className="mr-1" /> {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
