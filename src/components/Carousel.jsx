import React, { useState } from "react";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";

const Carousel = () => {
  const [carouselContent, setCarouselContent] = useState({
    heading: "High Quality",
    subheading: "Products",
    buttonText: "Buy Now",
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1, image2];

  const updateContent = () => {
    setCarouselContent({
      heading: "New Heading",
      subheading: "New Subheading",
      buttonText: "New Button Text",
    });

    // Cycle through images
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const switchImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full">
      <div className="aspect-w-3 aspect-h-2">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="object-cover w-full h-full absolute"
        />
      </div>
      <div className="relative w-full h-[520px] flex items-center justify-center">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center rounded-md">
            <span className=" text-[#277933] text-4xl md:text-4xl lg:text-4xl block m-3 font-bold">
              {carouselContent.heading}
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl text-[#277933] block m-3">
              {carouselContent.subheading}
            </span>
            <button
              onClick={updateContent}
              className="mt-4 px-6 py-3 border border-[#277933] text-[#277933] rounded-md m-3 hover:font-bold"
            >
              {carouselContent.buttonText}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex flex-col items-center">
        <button
          onClick={() =>
            switchImage((currentImageIndex - 1 + images.length) % images.length)
          }
          className="text-[#277933] bg-gray-200 p-5 rounded-full m-2"
        >
          &lt;
        </button>
        <button
          onClick={() => switchImage((currentImageIndex + 1) % images.length)}
          className="text-[#277933] bg-gray-200 p-5 rounded-full m-2"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
