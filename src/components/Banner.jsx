import React from "react";
import img1 from "../assets/plant.png";

export default function Banner() {
  return (
    <div className="flex flex-wrap items-center justify-center py-14 relative bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-2/3 mx-auto relative">
        {/* Image Container */}
        <div className="flex-1 max-w-[33.333333%] relative">
          <div className="absolute w-full h-full max-w-[480px] max-h-[420px] bottom-5 right-5 bg-[#40773b] rounded-md" />
          <div className="z-20">
            <img
              className="inset-0 w-full h-full object-cover rounded-md"
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
