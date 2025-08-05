import { useContext } from "react";
import { BsBookmark } from "react-icons/bs";
import { FaEye, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const NewsCard = ({ singleNews }) => {
  const { title, author, thumbnail_url, details, rating, total_view, _id } =
    singleNews;

  const { user } = useContext(AuthContext);

  const fullStars = Math.floor(rating.number);
  const hasHalf = rating.number % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div>
      <div className="flex flex-col w-full  space-y-6 overflow-hidden rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mb-8">
        <div className="bg-gray-200 px-4 py-3 flex justify-between">
          <div className="flex space-x-3 ">
            <img
              alt=""
              src={author.img}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1 justify-center ">
              <h4 className="text-sm font-semibold text-gray-800">
                {author.name}
              </h4>
              <span className="text-xs text-gray-600 dark:text-gray-600">
                {author.published_date}
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 text-gray-600">
            <BsBookmark />
            <IoShareSocialOutline className="text-xl" />
          </div>
        </div>

        <div className="px-4">
          <h2 className="mb-5 text-xl font-semibold text-gray-800">{title}</h2>
          <img
            src={thumbnail_url}
            alt=""
            className="object-fit w-full mb-4 h-64 rounded-sm sm:h-96 dark:bg-gray-500"
          />

          <div className="text-sm text-gray-600 text-justify">
            {details.slice(0, 420)} ... {""}
            {user ? (
              <>
                <Link
                  to={`/news/${_id}`}
                  className="text-[#fa701a] font-semibold hover:underline cursor-pointer"
                >
                  {" "}
                  Read More{" "}
                </Link>
              </>
            ) : (
              <>
                <span className="text-[#fa701a] font-semibold hover:underline cursor-pointer">
                  <label htmlFor="auth-modal"> Read More</label>

                  {/* Modal */}
                  <input
                    type="checkbox"
                    id="auth-modal"
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    <div className="modal-box text-center">
                      <h2 className="font-bold text-xl mb-4 text-gray-800">
                        Login Required
                      </h2>
                      <p className="mb-6 text-gray-600">
                        You need to login or register to read the full news
                        article.
                      </p>

                      {/* Buttons */}
                      <div className="flex justify-center gap-4">
                        <Link
                          to="/login"
                          state={{ from: `/news/${_id}` }}
                          className="relative inline-flex items-center justify-start px-2 lg:px-7 py-2 overflow-hidden font-medium transition-all bg-gray-700 rounded  group"
                        >
                          <span className="w-48 h-48 rounded rotate-[-40deg] bg-reddish absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out ">
                            Login
                          </span>
                        </Link>
                        <Link
                          to="/register"
                          state={{ from: `/news/${_id}` }}
                          className="relative inline-flex items-center justify-start px-2 lg:px-7 py-2 overflow-hidden font-medium transition-all bg-gray-700 rounded  group"
                        >
                          <span className="w-48 h-48 rounded rotate-[-40deg] bg-reddish absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out ">
                            Register
                          </span>
                        </Link>
                      </div>

                      {/* Close button */}
                      <div className="modal-action justify-center mt-6">
                        <label
                          htmlFor="auth-modal"
                          className="btn btn-sm bg-gray-300 hover:bg-reddish hover:text-white"
                        >
                          Cancel
                        </label>
                      </div>
                    </div>
                  </div>
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-between px-4 mb-5">
          <div className=" flex gap-2 justify-center items-center">
            {[...Array(fullStars)].map((_, i) => (
              <FaStar key={`full-${i}`} className="text-[#fa701a]" />
            ))}

            {hasHalf && <FaStarHalfAlt key="half" className="text-[#fa701a]" />}

            {[...Array(emptyStars)].map((_, i) => (
              <FaRegStar key={`empty-${i}`} className="text-[#fa701a]" />
            ))}
            <span className="text-sm text-gray-600">{rating.number}</span>
          </div>
          <div className="flex justify-center items-center gap-2 text-gray-600">
            <FaEye></FaEye> <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
