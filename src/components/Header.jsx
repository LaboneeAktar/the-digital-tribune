import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} className="w-1/3 mt-8 pb-2" alt="" />
      <h4 className="text-gray-600">
        News that Adapts. Reporting that Matters.
      </h4>
      <p className="text-gray-600 py-2">{moment().format("LLLL")}</p>
    </div>
  );
};

export default Header;
