import React from "react";
import img from "../assets/parcel.jpg";

export default function Contactdetails() {
  return (
    <>
      <div class="container mx-auto p-4">
        <p class="text-[#277933] text-center text-2xl font-extralight mb-4">
          CONTACT US
        </p>
        <p class="text-[#277933] text-center font-light text-sm">
          705/3B2, Layam Main Road, hagayan Nagar, Shanmugapuram, Thovalai
          <br />
          <br />
          <br />
          contact@curellifoods.com
          <br />
          <br />
          +91 8668157699
        </p>
      </div>

      <div class=" w-full mx-auto">
        <img class="w-full h-auto" alt="Image" src={img} />
      </div>

      <div class="flex flex-col md:flex-row items-center gap-10 px-12 md:px-72 py-20 md:py-20 relative bg-[#c9ddca]">
        <div class="flex flex-col items-start gap-9 relative flex-1">
          <div class="relative self-stretch mt-[-1.00px] font-extralight text-[#277933] text-3xl md:text-4xl tracking-normal leading-normal">
            OPENING HOURS
          </div>
          <div class="relative self-stretch font-extralight text-[#277933] text-2xl md:text-3xl tracking-normal leading-normal">
            Visit us
          </div>
          <p class="relative self-stretch font-extralight text-[#277933] text-base md:text-xl tracking-normal leading-normal">
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
