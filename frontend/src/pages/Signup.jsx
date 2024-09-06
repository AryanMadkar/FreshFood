import React from "react";

const Signup = () => {
  return (
    <div class=" bg-transparent border-2 mt-[5rem] border-white text-white w-[30vw] rounded-lg p-8 flex flex-col">
      <h2 class=" text-lg font-medium title-font mb-5">Sign Up</h2>

      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm ">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7 text-sm ">
          password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          class="w-full  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div class="relative mb-4">
        <button className="text-blue-500 hover:text-blue-900">
          Forget password
        </button>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Button
      </button>
      <p class="text-lg w-full flex justify-between px-2 mt-3">
        Not regestered{" "}
        <button className="text-blue-500 hover:text-blue-900">SignIn</button>
      </p>
    </div>
  );
};

export default Signup;
