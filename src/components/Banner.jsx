import React from "react";
import img1 from "../assets/UnmatchedQuality@AffordablePrice.jpg";

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row w-screen items-center justify-center gap-4 py-14 p-2 my-12 relative bg-white">
      {/* Image Container */}
      <div className="flex relative lg:w-2/6">
        <img
          className="w-full h-full object-cover rounded-md shadow border-b-8 border-r-8 border-[#277933] hover:scale-105 hover:border-none"
          alt="Rectangle"
          src={img1}
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center gap-4 lg:w-4/6 text-justify p-4">
        <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#40773b] text-center">
          Unmatched Quality at Affordable Price
        </p>
        <div className="text-[#40773b] xs:text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center font-semibold mb-2">
          Only the Best
        </div>
        <p className="text-[#40773b] xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-justify">
          The term "Organic" often carries a hefty price tag elsewhere. At our
          home, we offer an exception. Despite our commitment to authenticity
          and quality, our products are remarkably affordable. How? We grow our
          original organic ingredients in our very own farms. This direct
          connection from farm to table ensures not only unmatched quality but
          also keeps the prices within reach.
        </p>
      </div>
    </div>
  );
}
