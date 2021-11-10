import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Link from "next/link";

const TimeSelect = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="mx-80 relative">
      <div className="flex justify-end mr-20 mb-20">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 w-11"
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
        <Link href="/">
          <button className="flex ml-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
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
        </Link>
        <div className="flex">
          <div className="mr-4">
            <p>Our time: 07:28 UTC (GMT) +2</p>
            <p>Your time: 09:28 Asia/Tbilisi</p>
          </div>

          <button
            onClick={() => {
              setModalOpen(true);
            }}
            className="bg-black w-11 h-11 rounded-full mr-32 mt-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-200 mx-2 my-2"
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
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      {children}
    </div>
  );
};

export default TimeSelect;
