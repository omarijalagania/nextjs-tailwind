import React from "react";
import AvailableTimes from "../../components/DateSelect/AvailableTimes/AvailableTimes";
import Calendar from "../../components/DateSelect/Calendar/Calendar";

const index = () => {
  return (
    <div>
      <Calendar />
      <AvailableTimes/>
    </div>
  );
};

export default index;
