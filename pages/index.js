import Head from "next/head";

import Modal from "../components/Modal/Modal";
import SellProperty from "../components/Properties/SellProperty";
import BuyProperty from "../components/Properties/BuyProperty";
import BookingInfo from "../components/Booking/BookingInfo";
import TimeSelect from "../components/TimeSelect/TimeSelect";

export default function Home() {
  return (
    <div className="text-center">
      <p className="text-red-400 font-bold my-4">Tailwind With NextJs</p>
      <Modal />
      <BookingInfo />
      <TimeSelect/>
     
    </div>
  );
}
