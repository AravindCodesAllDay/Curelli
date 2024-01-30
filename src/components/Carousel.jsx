import React from "react";
import image1 from "../assets/carousel.png";

const Carousel = () => {
  return (
    <div className="relative w-full">
      <div className="aspect-w-3 aspect-h-2">
        <img
          src={image1}
          alt="Food items"
          className="object-cover w-full h-full absolute"
        />
      </div>
      <div className="relative w-full h-[520px] flex items-center justify-center">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center rounded-md">
            <span className="font-normal text-[#277933] text-4xl md:text-5xl lg:text-6xl block m-3">
              High Quality
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl flex-row text-[#277933] block m-3">
              Products
            </span>
            <button className="mt-4 px-6 py-3 border border-[#277933] text-[#277933] rounded-md m-3">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
