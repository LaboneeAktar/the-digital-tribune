import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import sliderImg1 from "../../assets/playground.png";
import sliderImg2 from "../../assets/swimming.png";
import sliderImg3 from "../../assets/class.png";
import bgImg from "../../assets/bg.png";

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

  // Carousel Image
  const images = [sliderImg1, sliderImg2, sliderImg3];

  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

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

      {/* Carousel */}

      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg  mt-5">
        {/* Images */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-full flex-shrink-0 object-cover h-64"
            />
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-1 h-1 rounded-full ${
                index === current ? "bg-reddish" : "bg-gray-400"
              }`}
              onClick={() => setCurrent(index)}
            ></button>
          ))}
        </div>
      </div>

      <div
        className="mt-5 flex justify-center"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "fit",
          backgroundRepeat: "no-repeat",
          height: "60vh",
        }}
      >
        <div className="flex flex-col items-center justify-center px-5 space-y-4">
          <h3 className="text-xl text-white text-center">
            Create an Amazing Newspaper
          </h3>
          <p className="text-sm text-white text-center">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="bg-reddish text-white px-3 py-2 text-xs">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
