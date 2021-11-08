import React from "react";

function BookingInfo() {
  return (
    <div className="w-6/12 m-7 shadow  overflow-hidden">
      <div className="bg-blue-400 rounded-md p-4">
        <div className="flex justify-between px-4 h-20">
          <h3 className="text-white font-bold">Booking Info</h3>
          <button className="h-6 text-white">x</button>
        </div>
        <ul className="flex">
          <li className="mr-3">
            <a className="text-white font-bold" href="#">
              Booking
            </a>
          </li>
          <li>
            <a href="#">Client</a>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div>
          <div className="bg-blue-400 rounded-md mt-4 w-64 h-32 relative">
            <p className="text-white font-bold text-left px-3">11-04-2021</p>
            <p className="text-left text-white px-3">11:00AM - 12:00AM</p>
            <div className="text-white text-left px-3 absolute bottom-3">
              <p>1 hr.</p>
            </div>
          </div>
          <div className="shadow p-4 bg-gray-200 w-64 mt-2">
            <p>Obz234dfe</p>
          </div>
          <div className="text-left p-3">
            <p className="text-gray-700 font-light">Created by client</p>
            <small>11-03-2021 03:34AM</small>
          </div>
        </div>
        {/* Other side */}
        <div className="p-5">
          <h3 className="font-bold text-left">Some Info</h3>
          <p className="text-gray-700 font-light">
            Client timezone: America/Los Angeles
          </p>
          <p className="text-gray-700 font-light text-left">Test</p>
          <p className="text-gray-700 font-light text-left">St. Paul's</p>
          <p className="text-gray-700 font-light text-left">Some address bar</p>
          <p className="text-gray-700 font-light text-left">0.00$</p>
        </div>
      </div>
    </div>
  );
}

export default BookingInfo;
