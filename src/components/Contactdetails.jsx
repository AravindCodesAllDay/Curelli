import React from "react";
import img from "../assets/parcel.jpg";

export default function Contactdetails() {
  return (
    <>
      <div className="container p-8">
        <p className="text-[#277933] text-center text-3xl">CONTACT US</p>
        <p className="text-[#277933] text-center font-light text-xl mt-8">
          No.705/3B of Chenbagaramanputhoor Road, Sahayanagar, Thovalai Village,
        </p>
        <p className="text-[#277933] text-center font-light text-xl">
          Shanmugapuram, kanyakumari district, Tamil Nadu - 629302
        </p>
        <p className="text-[#277933] text-center font-light text-xl mt-3">
          contact@curellifoods.com
        </p>
        <p className="text-[#277933] text-center font-light text-xl mt-3">
          +91 8668157699
        </p>
      </div>

      <div className="w-full mx-auto">
        <img className="w-full h-auto" alt="Image" src={img} />
      </div>

      <div className="flex flex-row items-center py-10 relative bg-[#c9ddca] justify-center">
        <div className=" items-center relative flex-1 text-center">
          <div className="relative self-stretch text-[#277933] text-3xl md:text-4xl tracking-normal leading-normal">
            OPENING HOURS
          </div>
          <p className="relative self-stretch text-[#277933] text-base tracking-normal leading-normal">
            Monday - Friday
            <br />
            9:00am - 8:00pm
            <br />
            <br />
            Saturday and Sunday
            <br />
            10:00am - 5:00pm
          </p>
        </div>
      </div>
    </>
  );
}
