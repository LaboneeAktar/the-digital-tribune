import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const RightNavbar = () => {
  const { googleLogin, setUser } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        toast.success("Successfully Login");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <div>
        <h3 className="font-semibold text-center text-gray-700 pb-5">
          Login With
        </h3>
        <div className="flex flex-col gap-2 mx-auto ">
          <button
            onClick={handleGoogleLogin}
            className="btn border-blue-700 text-blue-600 hover:text-reddish"
          >
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
          <Link
            to="https://facebook.com"
            target="_blank"
            className="btn text-gray-700 hover:text-reddish"
          >
            {" "}
            <FaFacebookF className="h-4 w-4 text-blue-700" /> Facebook
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            className="btn text-gray-700  hover:text-reddish"
          >
            <FaTwitter className="h-4 w-4 text-blue-500 " /> Twitter
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            className="btn text-gray-700 hover:text-reddish"
          >
            <FaInstagram className="h-4 w-4 text-reddish " /> Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
