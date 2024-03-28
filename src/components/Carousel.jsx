import React from "react";

import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function Carousel() {
  return (
    <>
      <div className="hidden lg:block xl:block 2xl:block w-full">
        <TECarousel showControls showIndicators ride="carousel">
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={`${
                  import.meta.env.VITE_API
                }carouselImg/Curelli_Food_Banner_01.jpg`}
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={`${
                  import.meta.env.VITE_API
                }carouselImg/Curelli_Food_Banner_02.jpg`}
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={`${
                  import.meta.env.VITE_API
                }carouselImg/Curelli_Food_Banner_03.jpg`}
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={4}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={`${
                  import.meta.env.VITE_API
                }carouselImg/Curelli_Food_Banner_04.jpg`}
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
          </div>
        </TECarousel>
      </div>{" "}
      <div className="lg:hidden xl:hidden 2xl:hidden w-full">
        <TECarousel showControls showIndicators ride="carousel">
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={`${import.meta.env.VITE_API}carouselImg/New_01.jpg`}
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={`${import.meta.env.VITE_API}carouselImg/New_02.jpg`}
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={`${import.meta.env.VITE_API}carouselImg/New_03.jpg`}
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={4}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={`${import.meta.env.VITE_API}carouselImg/New_04.jpg`}
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
          </div>
        </TECarousel>
      </div>
    </>
  );
}
