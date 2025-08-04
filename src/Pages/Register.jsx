import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const image = form.get("image");
    const imageUrl = URL.createObjectURL(image);
    setImage(imageUrl);
    console.log({ name, email, password, image, imageUrl });
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
                />
              </div>
              <div>
                <label className="text-md font-bold ">Password</label>

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
              <div className="mb-3 relative">
                <label
                  className="form-label block mb-2 text-md font-bold"
                  id="profile-picture"
                >
                  Upload Profile Picture
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setImage(URL.createObjectURL(file));
                    }
                  }}
                  className=" w-full text-sm text-slate-800 file:mr-2 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-gray-200 hover:file:cursor-pointer"
                />
                {image && (
                  <img
                    src={image}
                    className="absolute h-12 w-12 rounded-full -top-4 left-44 m-2"
                    alt="Uploaded preview"
                  />
                )}
              </div>
              <label className="label text-sm  mt-2" id="checkbox">
                <input type="checkbox" className="checkbox checkbox-xs" />
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
