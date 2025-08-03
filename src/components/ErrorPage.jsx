import backgroundImage from "../assets/errorBG.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="relative h-screen opacity-90 z-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800 absolute inset-0 justify-center backdrop-blur-xs">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-32 h-32 dark:text-gray-400"
          >
            <path
              fill="currentColor"
              d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
            ></path>
            <rect
              width="176"
              height="32"
              x="168"
              y="320"
              fill="currentColor"
            ></rect>
            <polygon
              fill="currentColor"
              points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
            ></polygon>
            <polygon
              fill="currentColor"
              points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
            ></polygon>
          </svg>
          <p className="mb-4 text-xl tracking-tight font-bold text-gray-900 md:text-3xl dark:text-white">
            Something's missing...
          </p>
          <p className="mb-4 text-sm font-light text-gray-900 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link
            to="/"
            className="relative inline-flex items-center justify-start px-2 lg:px-7 py-3 overflow-hidden font-medium transition-all bg-gray-700 rounded  group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#D72050] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out ">
              Back to Home
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
