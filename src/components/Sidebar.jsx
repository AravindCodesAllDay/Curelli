import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start gap-4 px-4 sm:px-8 py-4 relative border-r-2 h-full">
      {/* Breadcrumb */}
      <div className="text-green-700 text-base font-light tracking-[0] leading-[normal] m-5">
        Home &gt; All products
      </div>

      {/* Filter Heading */}
      <div className="text-green-700 text-base font-light tracking-[0] leading-[normal] border-b-2 w-full m-3">
        Filter by
      </div>

      {/* Price Range */}
      <div className="w-full h-[69px] relative m-3">
        <div className="absolute w-full h-[24px] top-0 left-0">
          <div className="absolute top-0 left-0 text-green-700 text-base font-light tracking-[0] leading-[normal]">
            Price
          </div>
        </div>

        <div className="absolute w-full h-[32px] top-[37px] left-0">
          <div className="w-full h-2 top-[4px] left-0 bg-green-700 rounded-[5px]" />
          <div className="absolute left-0 top-[15px] text-green-700 text-sm md:text-base tracking-[0] leading-[normal]">
            Rs. 7.50 - Rs. 130.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
