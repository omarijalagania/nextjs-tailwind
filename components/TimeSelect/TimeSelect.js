import React from "react";
import Confirmation from "../Confirmation/Confirmation";
import BuyProperty from "../Properties/BuyProperty";
import SelectedProperties from "../Properties/SelectedProperties/SelectedProperties";
import SellProperty from "../Properties/SellProperty";

const TimeSelect = () => {
  return (
    <div className="mx-80">
      <div className="flex justify-end mr-20 mb-20">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-11 w-11"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-between">
        <button className="flex ml-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <div className="">Back</div>
        </button>
        <div className="flex">
          <div className="mr-4">
            <p>Our time: 07:28 UTC (GMT) +2</p>
            <p>Your time: 09:28 Asia/Tbilisi</p>
          </div>

          <button className="bg-black w-11 h-11 rounded-full mr-32 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-gray-200 mx-2 my-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <BuyProperty />
      <SellProperty />
      <SelectedProperties/>
      <Confirmation/>
    </div>
  );
};

export default TimeSelect;
