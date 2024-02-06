import React, { useState, useEffect } from "react";
import image1 from "../assets/Banner_01.jpg";
import image2 from "../assets/Banner_02.jpg";
import image3 from "../assets/Banner_03.jpg";
import image4 from "../assets/Banner_04.jpg";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1, image2, image3, image4];

  const updateContent = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const switchImage = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateContent();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]);

  return (
    <div className="relative w-full">
      <div onClick={updateContent}>
        <div className="aspect-w-3 aspect-h-2">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="object-cover w-full h-full absolute cursor-pointer"
          />
        </div>
        <div className="relative w-full h-[520px] flex items-center justify-center">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => switchImage(index)}
            className={`w-3 h-3 rounded-full z-20 cursor-pointer hover:bg-[#277933] ${
              index === currentImageIndex ? "bg-[#277933]" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
