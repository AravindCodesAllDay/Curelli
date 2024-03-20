import React, { useEffect, useState } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselCrossfade() {
  const [carouselLap, setCarouselLap] = useState([]);
  const [carouselMobile, setCarouselMobile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}carousel`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if needed
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();

        const lapItems = products.filter((item) => !item.mobile);
        const mobileItems = products.filter((item) => item.mobile);

        setCarouselLap(lapItems);
        setCarouselMobile(mobileItems);
      } catch (error) {
        console.error("Fetch error:", error);
        // Handle errors here
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <>
      <div className="hidden lg:block xl:block 2xl:block">
        <TECarousel showControls showIndicators crossfade ride="carousel">
          <div className="relative w-full overflow-hidden after:clear-both after:block">
            {carouselLap.map((item, index) => (
              <TECarouselItem
                key={item._id}
                itemID={index + 1}
                className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={`${import.meta.env.VITE_API}carouselImg/${item.photo}`}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
            ))}
          </div>
        </TECarousel>
      </div>
      <div className="lg:hidden xl:hidden 2xl:hidden">
        <TECarousel showControls showIndicators crossfade ride="carousel">
          <div className="relative w-full overflow-hidden after:clear-both after:block">
            {carouselMobile.map((item, index) => (
              <TECarouselItem
                key={item._id}
                itemID={index + 1}
                className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={`${import.meta.env.VITE_API}carouselImg/${item.photo}`}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
            ))}
          </div>
        </TECarousel>
      </div>
    </>
  );
}
