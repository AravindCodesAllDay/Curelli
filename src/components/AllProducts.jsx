import React from "react";
import img from "../assets/shopbanner.svg";

export default function AllProducts() {
  return (
    <>
      <div className="flex flex-col w-full h-[280px] items-start gap-4 relative">
        <img className="w-full h-full object-cover" alt="Element" src={img} />
      </div>
      <div className="flex flex-col items-start gap-4 relative p-12">
        <div className="font-light text-[#277933] text-2xl tracking-normal leading-normal">
          All Products
        </div>
        <p className="text-[#277933] text-base tracking-normal leading-normal">
          This is your category description. It’s a great place to tell
          customers what this category is about, connect with your audience and
          draw attention to your products.
        </p>
        <div className="flex flex-wrap items-start justify-between gap-4 relative self-stretch w-full">
          <div className="text-[#277933] text-sm tracking-normal leading-normal">
            12 Products
          </div>
          <div className="relative">
            <div className="text-[#277933] text-sm tracking-normal leading-normal">
              Sort by: Recommended
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
