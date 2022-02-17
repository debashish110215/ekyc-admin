import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiEyeOff, HiEye } from "react-icons/hi";

const SignIn = () => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <div className="h-screen w-screen flex">
      <div className=" w-2/4 flex justify-center items-center">
        <div>
          <h2 className="text-4xl text-gray-800 font-bold text-center">
            Welcome Back
          </h2>
          <div>
            <img
              className=" mx-auto h-32"
              src={"logo/app_logo.svg"}
              alt="app logo"
            />

            <img
              className=" mx-auto h-6"
              src={"logo/app_logo_title_colored.svg"}
              alt="app logo title"
            />
          </div>
          <div className="mt-12">
            <img
              className=" mx-auto h-56"
              src={"logo/dashboard_icon.svg"}
              alt="app logo title"
            />
          </div>
        </div>
      </div>
      <div className="bg-sky-700 p-8 w-2/4 flex justify-center items-center">
        <div>
          <h2 className="text-4xl text-gray-200 font-bold mb-8">Log in</h2>
          <form action="">
            <div className="mb-4 ">
              <label htmlFor="email" className="block mb-2 text-gray-300 ">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="input-control"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-gray-300">
                Password
              </label>
              <div className="relative">
                <input
                  className="input-control"
                  type={`${showPassword ? "text" : "password"}`}
                  name="password"
                  id="password"
                  placeholder="***************"
                />
                <span className="absolute top-3 right-2">
                  {showPassword ? (
                    <HiEye
                      className="h-4 w-4 text-gray-400"
                      onClick={() => setshowPassword(!showPassword)}
                    />
                  ) : (
                    <HiEyeOff
                      className="h-4 w-4 text-gray-400"
                      onClick={() => setshowPassword(!showPassword)}
                    />
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 rounded checked:text-orange-900 checked:invert focus:ring-0 border-0 focus:border-0 active:border-0"
                  />
                  <span className="ml-2 text-gray-300"> Keep me logged in</span>
                </label>
              </div>
              {/* <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className=" text-gray-300 dark:text-gray-300"
                >
                  Keep me logged in
                </label>
              </div> */}
            </div>
            <button type="submit" className="btn btn-info">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
