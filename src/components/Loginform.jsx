import React from "react";

function Loginform() {

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex w-full h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <h1 className="text-5xl font-semibold">Welcome back!</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Please enter your details
          </p>
          <form onSubmit={handleSubmit}>

          <div className="mt-8">
            <label className="font-medium text-lg">Email</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="font-medium text-lg">Password</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your password"
              type="password"
            />
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-medium text-base" for="remember">
                Remember for 30 days
              </label>
            </div>
            <button className="font-medium text-base text-blue-500">
              Forgot password
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-y-4">
            <button type="submit" className="bg-blue-500 text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out">
              Login
            </button>
          </div>

          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base">Don't have an account?</p>
            <button className=" text-blue-500 text-base font-medium ml-2">
              Sign up
            </button>
          </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex h-full items-center justify-center w-1/2">
        <img
          src="https://unsplash.com/photos/XATEEfeN7C4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk2OTU3NTA0fA&force=true&w=2400"
          alt="Puppy-img"
        />
      </div>
    </div>
  );
}

export default Loginform;
