import React from "react";
import Link from "next/link";

const AvailableTimes = () => {
  return (
    <div className="w-auto mx-3 my-3  rounded border shadow-lg  pb-10 mr-10 ">
      <div className="mx-20 mt-16 ">
        <h1 className="font-bold">Available Start Time</h1>
        <div className="my-5">
          <div className="">
            <Link href="/confirmation">
              <button className=" hover:bg-custom-green border-2 py-1 px-12 mr-5 mb-3 rounded-full">
                11:00-12:00
              </button>
            </Link>
            <Link href="/confirmation">
              <button className=" hover:bg-custom-green border-2 py-1 px-12 mr-5 mb-3 rounded-full">
                13:00-14:00
              </button>
            </Link>
            <Link href="/confirmation">
              <button className=" hover:bg-custom-green border-2 py-1 px-12 mr-5 mb-3 rounded-full">
                14:00-15:00
              </button>
            </Link>
            <Link href="/confirmation">
              <button className=" hover:bg-custom-green border-2 py-1 px-12 mr-5 mb-3 rounded-full">
                16:00-17:00
              </button>
            </Link>
            <Link href="/confirmation">
              <button className=" hover:bg-custom-green border-2 py-1 px-12 mr-5 mb-3 rounded-full">
                18:00-19:00
              </button>
            </Link>
            <Link href="/confirmation">
              <button className=" hover:bg-custom-green border-2 py-1 px-12 mr-5 mb-3 rounded-full">
                19:00-20:00
              </button>
            </Link>
          </div>
        </div>
        <div className="flex ">
          <div className="border-2 rounded-full inline-block py-2 px-2 h-2 border-gray-500 mt-0.5"></div>
          <p className="ml-2">- Available</p>
        </div>
      </div>
    </div>
  );
};

export default AvailableTimes;
