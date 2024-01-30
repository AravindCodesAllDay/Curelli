import React from "react";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-start gap-4 px-4 sm:px-8 py-4 relative border-r-2 h-full">
      <div className="text-[#277933] text-base font-light tracking-[0] leading-[normal] m-5">
        Home &gt; All products
      </div>

      <div className="text-[#277933] text-base font-light tracking-[0] leading-[normal] border-b-[#277933] border-b-2 w-full m-3">
        Browse by
      </div>

      {/* Category Links */}
      <div className="text-[#277933] text-base font-light tracking-[0] leading-[normal] underline m-3">
        All products
      </div>

      <div className="text-[#277933] text-base font-light tracking-[0] leading-[normal] border-b-2 w-full m-3">
        Filter by
      </div>

      {/* Price Range */}
      <div className="w-full h-[69px] relative m-3">
        <div className="absolute w-full h-[24px] top-0 left-0">
          <div className="absolute top-0 left-0 text-[#277933] text-base font-light tracking-[0] leading-[normal]">
            Price
          </div>
        </div>

        <div className="absolute w-full h-[32px] top-[37px] left-0">
          <div className="w-full h-2 top-[4px] left-0 bg-[#277933] rounded-[5px]" />
          <div className="absolute left-0 top-[15px] text-[#277933] text-sm md:text-base tracking-[0] leading-[normal]">
            ₹ 7.50 - ₹ 130.00
          </div>
        </div>
      </div>

      {/* Color and Size Filters */}
      {["Color", "Size"].map((filter, index) => (
        <div key={index} className="w-full h-[24px] relative m-3">
          <div className="absolute w-10 h-10 top-10 left-[187px]">
            {/* Color or Size Indicator */}
            <div className="relative h-10"></div>
          </div>
          <div className="absolute top-0 left-0 text-[#277933] text-base font-light tracking-[0] leading-[normal] border-b-2 w-full">
            {filter}
          </div>
        </div>
      ))}
    </div>
  );
}
