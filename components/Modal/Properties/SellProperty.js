import React from "react";

const SellProperty = () => {
  return (
    <div class="max-w-screen-lg bg-white shadow-2xl rounded-lg mx-auto text-center py-8 mt-4 rounded border-l-4 border-black flex justify-between">
      <div className="ml-10">
        <div className="font-bold">Sell Property</div>
        <div className="flex pt-2">
          <img
            className="w-6 h-6"
            src="https://img.icons8.com/material-outlined/24/000000/hourglass--v1.png"
          />
          <span>1 hr.</span>
        </div>
      </div>
      <div class=" flex justify-end">
        <div class="inline-flex justify-center rounded-full bg-black shadow w-48 h-12 mr-5">
          <a href="#" class="text-green-300 font-bold mt-3">
            Select
          </a>
        </div>
      </div>
    </div>
  );
};

export default SellProperty;
