import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
  const { createNewUser, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const imageUrl = form.get("image");

    // Create User
    createNewUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        // setUser(user);
        console.log(user);
        const userInfo = {
          displayName: name,
          photoURL: imageUrl,
        };
        updateUser(userInfo);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center my-10">
        <div className="flex flex-col w-xl px-4 rounded-md  lg:py-12 bg-gray-50 mt-0 dark:text-gray-800 shadow-lg">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-3xl font-bold">Register</h1>
            <p className="text-sm dark:text-gray-600">
              Register to create your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-12 px-10">
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-md font-bold">
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Enter your Name"
                  className="w-full p-3  rounded-md bg-gray-200 dark:text-gray-800"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-md font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-full p-3  rounded-md bg-gray-200 dark:text-gray-800"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  className="form-label block mb-2 text-md font-bold"
                  id="profile-picture"
                >
                  Image URL
                </label>
                <input
                  type="imageURL"
                  name="image"
                  placeholder="Enter Your Image URL"
                  className="w-full p-3  rounded-md bg-gray-200 dark:text-gray-800"
                  required
                />
              </div>

              <div>
                <label className="text-md font-bold mb-2">Password</label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="w-full p-3 rounded-md bg-gray-200 dark:text-gray-800 mt-2"
                  required
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

              <label className="label text-sm  mt-2" id="checkbox">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  required
                />
                Accept our terms and condition.
              </label>
              <div className="space-y-4 flex flex-col justify-center items-center pt-2">
                <button
                  type="submit"
                  className=" w-1/2 relative inline-flex items-center justify-center px-2 lg:px-7 py-3 overflow-hidden font-medium transition-all bg-gray-700 rounded group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#D72050] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-white text-center transition-colors duration-300 ease-in-out ">
                    Register
                  </span>
                </button>

                <p className="px-6 text-sm text-center dark:text-gray-600">
                  Already have an account? {""}
                  <Link className="text-red-500" to="/login">
                    Login
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

export default Register;
