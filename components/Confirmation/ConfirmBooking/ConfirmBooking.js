import React from "react";

const ConfirmBooking = () => {
  return (
    <div className="w-3/12  shadow-lg flex  flex-col ml-10">
      <div className="bg-custom-green w-20 h-20 rounded-full mt-10 ml-32">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mt-2 ml-2"
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
      <div className="flex justify-start pr-40 mt-10 flex-col pb-10">
        <h1 className="font-bold ml-6">Buy Property</h1>
        <div className="flex ml-10 w-max mt-6">
          <p className="mr-20">Date:</p>
          <p className="font-bold">09-11-2021</p>
        </div>
        <div className="flex ml-10 w-max mt-6">
          <p className="mr-16">Start at:</p>
          <p className="font-bold">18:00</p>
        </div>
        <div className="flex ml-10 w-max mt-6">
          <p className="mr-14">Provider:</p>
          <p className="font-bold">Linda Braining</p>
        </div>
      </div>
      <div>
        <div className="ml-10 pb-10 pr-10">
          <div className="">
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox " />
                <span className="ml-2 font-light text-sm mt-5">
                  I agree with SimplyBook.me Terms & Conditions.
                </span>
              </label>
            </div>
            <div>
              <label className="flex  items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 font-light text-sm mt-5">
                  Be one of the first to receive messages about our promotions and other cool stuff.
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center pb-10 pl-7">
        <button className="inline-flex justify-center rounded-full bg-black shadow w-48 h-12 mr-5 mt-1">
          <a href="#" className="text-custom-green font-bold mt-3">
            Confirm booking
          </a>
        </button>
      </div>
    </div>
  );
};

export default ConfirmBooking;
