// import { useState, useEffect } from "react";
import image1 from "../assets/Curelli_Food_Banner_01.jpg";
import image2 from "../assets/Curelli_Food_Banner_02.jpg";
import image3 from "../assets/Curelli_Food_Banner_03.jpg";
import image4 from "../assets/Curelli_Food_Banner_04.jpg";

// const Carousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const images = [image1, image2, image3, image4];

//   const updateContent = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const switchImage = (index) => {
//     setCurrentImageIndex(index);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       updateContent();
//     }, 5000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [currentImageIndex]);

//   return (
//     <div className="relative w-screen h-[600px]">
//       <div onClick={updateContent}>
//         <div className="aspect-w-3 aspect-h-2">
//           {" "}
//           {/* Increased height here */}
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Image ${index + 1}`}
//               className={`object-cover w-full h-[600px] absolute transition-opacity duration-500 ${
//                 index === currentImageIndex ? "opacity-100" : "opacity-0"
//               }`}
//             />
//           ))}
//         </div>
//         <div className="relative w-full h-[520px] flex items-center justify-center">
//           <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
//             <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center rounded-md"></div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => switchImage(index)}
//             className={`w-3 h-3 rounded-full z-20 cursor-pointer hover:bg-[#277933] ${
//               index === currentImageIndex ? "bg-[#277933]" : "bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselCrossfade() {
  return (
    <>
      <TECarousel showControls showIndicators crossfade ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src={image1} className="block w-full" alt="..." />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src={image2} className="block w-full" alt="..." />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src={image3} className="block w-full" alt="..." />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}
