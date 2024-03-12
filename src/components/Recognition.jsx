import React from "react";
import img1 from "../assets/one.jpg";
export default function Recognition() {
  return (
    <div className="flex flex-col justify-center items-center h-full m-8">
      <h4 className="text-[#40773b] xs:text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
        As seen and Recognised on
      </h4>
      <div className="m-6">
        <img src={img1} alt="" />
      </div>
    </div>
  );
}
