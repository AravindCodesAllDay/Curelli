import React, { useEffect, useState } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
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
        <CCarousel>
          {carouselLap.map((item) => (
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={`${import.meta.env.VITE_API}carouselImg/${item.photo}`}
                alt="slide 1"
              />
            </CCarouselItem>
          ))}
        </CCarousel>
      </div>
      <div className="lg:hidden xl:hidden 2xl:hidden">
        <CCarousel>
          {carouselMobile.map((item) => (
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={`${import.meta.env.VITE_API}carouselImg/${item.photo}`}
                alt="slide 1"
              />
            </CCarouselItem>
          ))}
        </CCarousel>
      </div>
    </>
  );
}
