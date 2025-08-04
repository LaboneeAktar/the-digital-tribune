import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log({ email, password });
  };
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col w-xl px-6 rounded-md lg:px-10 lg:py-12 bg-gray-50 mt-0 dark:text-gray-800 shadow-lg">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-3xl font-bold">Login</h1>
            <p className="text-sm dark:text-gray-600">
              Login to access your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-12 px-10">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-md font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-full p-3  rounded-md bg-gray-200 dark:text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-md font-bold ">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="w-full p-3 rounded-md bg-gray-200 dark:text-gray-800"
                />
                <div className="flex justify-end">
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs pt-2 hover:underline dark:text-gray-600"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="space-y-4 flex flex-col justify-center items-center pt-2">
                <button
                  type="submit"
                  className=" w-1/2 relative inline-flex items-center justify-center px-2 lg:px-7 py-3 overflow-hidden font-medium transition-all bg-gray-700 rounded group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#D72050] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-white text-center transition-colors duration-300 ease-in-out ">
                    Login
                  </span>
                </button>

                <p className="px-6 text-sm text-center dark:text-gray-600">
                  Don't have an account? {""}
                  <Link className="text-red-500" to="/register">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
