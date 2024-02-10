import React from "react";
import img1 from "../assets/UnmatchedQuality@AffordablePrice.jpg";

export default function Banner() {
  return (
    <div className="flex flex-wrap items-center justify-center py-14 my-12 relative bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-2/3 mx-auto relative">
        {/* Image Container */}
        <div className="flex-1 max-w-[33.333333%] relative">
          <div className="z-20">
            <img
              className="w-full h-full rounded-md shadow border-b-8 border-r-8 border-[#277933] hover:scale-105 hover:border-none"
              alt="Rectangle"
              src={img1}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col w-full md:w-[66.666667%] items-center gap-4 relative">
          <p className="text-[#40773b] text-4xl font-semibold text-center">
            Unmatched Quality at Affordable Price
          </p>
          <div className="text-[#40773b] text-xl font-medium text-center mb-2">
            Only the Best
          </div>
          <p className="text-[#40773b] text-lg text-center">
            The term "Organic" often carries a hefty price tag elsewhere. At our
            home, we offer an exception. Despite our commitment to authenticity
            and quality, our products are remarkably affordable. How? We grow
            our original organic ingredients in our very own farms. This direct
            connection from farm to table ensures not only unmatched quality but
            also keeps the prices within reach.
          </p>
        </div>
      </div>
    </div>
  );
}
