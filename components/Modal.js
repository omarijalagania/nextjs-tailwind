import React from "react";

function Modal() {
  return (
    <div className="border-2 test ">
      <h3>Select Timezone</h3>
      <p>Please select your timezone</p>
      <select>
        <option>Asia/Tbilisi(09:30)</option>
      </select>
      <button>Set my Timezone</button>
      <h3>Cancel</h3>
    </div>
  );
}

export default Modal;
