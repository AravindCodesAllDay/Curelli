import image1 from "../assets/Curelli_Food_Banner_01.jpg";
import image2 from "../assets/Curelli_Food_Banner_02.jpg";
import image3 from "../assets/Curelli_Food_Banner_03.jpg";
import image4 from "../assets/Curelli_Food_Banner_04.jpg";
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
            <img src={image4} className="block w-full" alt="..." />
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src={image3} className="block w-full" alt="..." />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}
