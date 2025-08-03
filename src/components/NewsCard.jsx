import { BsBookmark } from "react-icons/bs";
import { FaEye, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ singleNews }) => {
  const { title, author, thumbnail_url, details, rating, total_view } =
    singleNews;

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

          <p className="text-sm text-gray-600 text-justify">
            {details.slice(0, 420)} ... {""}
            <span className="text-[#fa701a] font-semibold hover:underline cursor-pointer">
              Read More
            </span>
          </p>
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
