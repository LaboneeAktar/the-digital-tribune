import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} className="w-full lg:w-1/3 mt-8 pb-2" alt="" />
      <h4 className="animate-text-gradient bg-radial-[circle_at_50%] from-reddish via-70% to-greenish bg-[length:200%] bg-clip-text text-transparent">
        News that Adapts . Reporting that Matters.
      </h4>
      <p className="text-gray-600 py-2 text-sm">{moment().format("LLLL")}</p>
    </div>
  );
};

export default Header;
