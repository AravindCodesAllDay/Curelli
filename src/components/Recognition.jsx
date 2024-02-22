import React from "react";
import img1 from "../assets/one.jpg";
export default function Recognition() {
  return (
    <div className="flex flex-col justify-center items-center h-full m-8">
      <h4 className="text-[#40773b] xs:text-xl lg:text-4xl md:text-3xl sm:text-xl xl:text-4xl 2xl:text-4xl">
        As seen and Recognised on
      </h4>
      <div className="m-6">
        <img src={img1} alt="" />
      </div>
    </div>
  );
}
