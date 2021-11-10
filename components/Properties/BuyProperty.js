import React from "react";

const SellProperty = () => {
  return (
    <div className="max-w-screen-lg bg-white shadow-2xl rounded-lg mx-auto text-center py-8 mt-4 border-l-4 border-black flex justify-between">
      <div className="ml-10 flex">
        <div className="bg-custom-green w-12 h-12 rounded-full mr-5 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 mt-1 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"
            />
          </svg>
        </div>
        <div>
          <div className="font-bold">Buy Property</div>
          <div className="flex pt-2">
            <img
              className="w-6 h-6"
              src="https://img.icons8.com/material-outlined/24/000000/hourglass--v1.png"
            />
            <span>1 hr.</span>
          </div>
        </div>
      </div>
      <div className=" flex justify-end">
        <button className="inline-flex justify-center rounded-full bg-black shadow w-48 h-12 mr-5 mt-1">
          <a href="#" className="text-custom-green font-bold mt-3">
            Select
          </a>
        </button>
      </div>
    </div>
  );
};

export default SellProperty;
