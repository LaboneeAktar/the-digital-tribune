import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category))
      .catch((error) => console.error(error));
  }, []);

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
    </div>
  );
};

export default LeftNavbar;
