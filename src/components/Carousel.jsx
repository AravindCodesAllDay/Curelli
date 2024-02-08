import React, { useState, useEffect } from "react";
import image1 from "../assets/Curelli_Food_Banner_01.jpg";
import image2 from "../assets/Curelli_Food_Banner_02.jpg";
import image3 from "../assets/Curelli_Food_Banner_03.jpg";
import image4 from "../assets/Curelli_Food_Banner_04.jpg";

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
    <div className="relative w-screen overflow-hidden">
      <div
        onClick={updateContent}
        className="transition-transform duration-500"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
          transition: "transform 0.5s ease",
          display: "flex",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="object-cover w-full h-full"
          />
        ))}
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
