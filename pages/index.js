import Head from "next/head";

import Modal from "../components/Modal/Modal";
import SellProperty from "../components/Properties/SellProperty";
import BuyProperty from "../components/Properties/BuyProperty";
import BookingInfo from "../components/Booking/BookingInfo";
import TimeSelect from "../components/TimeSelect/TimeSelect";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className="text-center">
      <BuyProperty />
      <SellProperty />
      <BookingInfo/>
    </div>
  );
}
