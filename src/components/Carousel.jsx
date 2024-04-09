import React, { useState, useEffect } from "react";

import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function Carousel() {
  const [carouselLap, setCarouselLap] = useState([]);
  const [carouselMobile, setCarouselMobile] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}carousel`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();

        const lapItems = products.filter((item) => !item.mobile);
        const mobileItems = products.filter((item) => item.mobile);
        lapItems.sort((a, b) => a.index - b.index);
        mobileItems.sort((a, b) => a.index - b.index);
        setCarouselLap(lapItems);
        setCarouselMobile(mobileItems);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);
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
                src={
                  carouselLap.length > 0 &&
                  `${import.meta.env.VITE_API}carouselImg/${
                    carouselLap[0].photo
                  }`
                }
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={
                  carouselLap.length > 0 &&
                  `${import.meta.env.VITE_API}carouselImg/${
                    carouselLap[1].photo
                  }`
                }
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={
                  carouselLap.length > 0 &&
                  `${import.meta.env.VITE_API}carouselImg/${
                    carouselLap[2].photo
                  }`
                }
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={4}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={
                  carouselLap.length > 0 &&
                  `${import.meta.env.VITE_API}carouselImg/${
                    carouselLap[3].photo
                  }`
                }
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
                src={
                  carouselLap.length > 0 &&
                  `${import.meta.env.VITE_API}carouselImg/${
                    carouselMobile[0].photo
                  }`
                }
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={
                  carouselLap.length > 0 &&
                  `${import.meta.env.VITE_API}carouselImg/${
                    carouselMobile[1].photo
                  }`
                }
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={
                  carouselLap.length > 0 &&
                  `${import.meta.env.VITE_API}carouselImg/${
                    carouselMobile[2].photo
                  }`
                }
                className="block w-full"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={4}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={
                  carouselLap.length > 0 &&
                  `${import.meta.env.VITE_API}carouselImg/${
                    carouselMobile[3].photo
                  }`
                }
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
