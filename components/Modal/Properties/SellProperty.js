import React from "react";

const SellProperty = () => {
  return (
    <div class="max-w-screen-lg bg-white shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 rounded border-l-4 border-gray-500 flex justify-between">
      <div className="ml-10">
        <div>Sell Property</div>
        <span>1 hr.</span>
      </div>

      <div class=" flex justify-end">
        <div class="inline-flex justify-center rounded-full bg-black shadow w-48 mr-5">
          <a href="#" class="text-green-300 font-bold mt-3">
            Select
          </a>
        </div>
      </div>
    </div>
  );
};

export default SellProperty;