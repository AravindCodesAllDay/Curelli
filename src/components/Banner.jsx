import React from "react";
import img from "../assets/plant.png";

export default function Banner() {
  return (
    <div className="flex flex-wrap mx-auto items-center justify-center gap-8 p-10 relative bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative flex-1">
        <div className="relative w-full md:w-[50%] h-[412px] lg:ml-20 lg:mr-20">
          <div className="absolute w-full h-full max-w-[480px] max-h-[420px] bottom-5 right-5 bg-[#40773b] rounded-md" />
          <img
            className="absolute w-full h-full max-w-[480px] max-h-[420px] bottom-0 right-0 object-cover rounded-md"
            alt="Rectangle"
            src={img}
          />
        </div>
        <div className="flex flex-col w-full md:w-[50%] items-center gap-8 relative">
          <p className="text-[#40773b] text-4xl font-semibold text-center mb-4">
            Unmatched Quality at Affordable Price
          </p>
          <div className="text-[#40773b] text-xl font-medium text-center mb-4">
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
