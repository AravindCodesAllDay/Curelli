import React from "react";
import img1 from "../assets/UnmatchedQuality@AffordablePrice.jpg";

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row w-screen items-center justify-center gap-8 py-14 p-4 my-12 relative bg-white">
      {/* Image Container */}
      <div className="flex relative w-2/5">
        <img
          className="w-full h-full object-cover rounded-md shadow border-b-8 border-r-8 border-[#277933] hover:scale-105 hover:border-none"
          alt="Rectangle"
          src={img1}
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center gap-4 w-3/5 text-justify">
        <p className="text-[#40773b] text-4xl font-semibold text-center">
          Unmatched Quality at Affordable Price
        </p>
        <div className="text-[#40773b] text-xl font-medium text-center mb-2">
          Only the Best
        </div>
        <p className="text-[#40773b] text-lg text-center">
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
