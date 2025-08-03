import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const RightNavbar = () => {
  return (
    <div>
      <div>
        <h3 className="font-semibold text-center text-gray-700 pb-5">
          Login With
        </h3>
        <div className="flex flex-col gap-2 mx-auto ">
          <button className="btn border-blue-700 text-blue-600 hover:text-reddish">
            {" "}
            <FcGoogle className="h-[18px] w-[18px]" /> Login With Google
          </button>
          <button className="btn text-gray-700 border-gray-800 hover:text-reddish">
            <FaGithub className="h-[18px] w-[18px] text-gray-800 " /> Login With
            Github
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="font-semibold text-center text-gray-700 pb-5">
          Find Us On
        </h3>
        <div className="flex flex-col mx-auto ">
          <button className="btn text-gray-700 hover:text-reddish">
            {" "}
            <FaFacebookF className="h-4 w-4 text-blue-700" /> Facebook
          </button>
          <button className="btn text-gray-700  hover:text-reddish">
            <FaTwitter className="h-4 w-4 text-blue-500 " /> Twitter
          </button>
          <button className="btn text-gray-700 hover:text-reddish">
            <FaInstagram className="h-4 w-4 text-reddish " /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
