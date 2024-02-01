import React from "react";
import img from "../assets/parcel.jpg";

export default function Contactdetails() {
  return (
    <>
      <div className="container p-4">
        <p className="text-[#277933] text-center text-3xl mb-4">CONTACT US</p>
        <p className="text-[#277933] text-center font-light text-xl">
          705/3B2, Layam Main Road, hagayan Nagar, Shanmugapuram, Thovalai
          <br />
          <br />
          contact@curellifoods.com
          <br />
          <br />
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
          <div className="relative self-stretch font-extralight text-[#277933] text-2xl tracking-normal leading-normal">
            Visit us
          </div>
          <p className="relative self-stretch font-extralight text-[#277933] text-base tracking-normal leading-normal">
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
