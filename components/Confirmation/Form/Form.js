import React from "react";

const Form = () => {
  return (
    <div className="w-70 max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 ">
          <label
            className=" block text-gray-700 text-sm font-bold mb-5 mr-56"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            className="border-l-4 border-black shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-5 mr-56"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border-l-4 border-black  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="***********"
          />
          <p className="text-red-500 text-xs italic hidden">
            Please choose a password.
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-5 mr-56"
            htmlFor="phone"
          >
            Phone:
          </label>
          <input
            className="shadow appearance-none border-l-4 border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="number"
            placeholder="Phone"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
