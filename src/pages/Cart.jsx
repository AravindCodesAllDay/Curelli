import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/profile.jpg";
import CartItems from "../components/CartItems";

export default function Cart() {
  return (
    <div>
      <Navbar />

      <div className="w-full flex flex-col md:flex-row justify-center items-center bg-white p-4 md:p-8">
        <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center md:items-start max-h-[150px] md:h-screen rounded-md shadow-md bg-[#EBFFE3] overflow-hidden">
          <img
            src={img1}
            alt="Profile"
            className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full mx-auto md:mx-0 my-4 md:my-0 p-6"
          />
          <h2 className="text-center md:text-left text-3xl font-semibold md:ml-4 text-[#277933]">
            Cart
          </h2>
        </div>
      </div>

      <CartItems />
      <Footer />
    </div>
  );
}
