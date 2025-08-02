import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="bg-gray-200 mt-7 lg:max-w-5xl mx-auto rounded-sm">
      <div className="flex gap-2 items-center justify-center p-3">
        <p className="py-2 px-4 bg-[#D72050] text-white rounded-sm">Latest</p>
        <Marquee className="space-x-10" pauseOnHover={true}>
          <Link to="/news">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            provident amet unde temporibus cum.
          </Link>
          <Link to="/news">
            Fugit neque ducimus, quam alias nulla repudiandae. A saepe eligendi
            recusandae repudiandae quaerat rerum magnam.
          </Link>
          <Link to="/news">
            Animi numquam doloremque sunt quae? Impedit, modi. Iusto,
            dignissimos sint?
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
