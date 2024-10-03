export const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center px-2 py-8">
      <div className="w-full  md:mt-0 sm:max-w-md xl:p-0 rounded-xl border-spacing-10 shadow-md border h-screen">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white border rounded-xl border-gray-300 text-gray-900 text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-white border rounded-xl border-gray-300 text-gray-900 text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Confirm password
              </label>
              <input
                type="confirm-password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <div className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 ">
                  <img
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <img
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <img
                    className="h-6 w-6"
                    src="https://www.svgrepo.com/show/506498/google.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-primary-300"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-light text-gray-500 dark:text-gray-300">
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
