import Head from "next/head";

import Modal from "../components/Modal/Modal";
import SellProperty from "../components/Modal/Properties/SellProperty";
import BuyProperty from "../components/Modal/Properties/BuyProperty";
import BookingInfo from "../components/Booking/BookingInfo";

export default function Home() {
  return (
    <div className="text-center">
      <p className="text-red-400 font-bold my-4">Tailwind With NextJs</p>
      <Modal />
      <BookingInfo />
      <BuyProperty />
      <SellProperty />
    </div>
  );
}
