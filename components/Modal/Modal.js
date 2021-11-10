import React from "react";

import classes from "./Modal.module.css";

function Modal({ setOpenModal }) {
  return (
    <div className={classes.modalBackground}>
      <div
        className={`${classes.modalContainer} shadow p-5 rounded-md bg-white`}
      >
        <h3 className="font-bold">Select Timezone</h3>
        <p className="text-left p-3 font-medium">Please select your timezone</p>
        <div className="flex flex-col">
          <select className="mt-3 mb-3">
            <option>Asia/Tbilisi(09:30)</option>
          </select>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="bg-black text-custom-green rounded-full m-3 py-2"
          >
            Set my Timezone
          </button>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
